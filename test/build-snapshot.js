import fse from 'fs-extra'
import _ from 'lodash'
import Handlebars from 'handlebars';
import { parseEvents } from '../src/events.js'

const samples = await fse.readJson('./node_modules/@octokit/webhooks-examples/api.github.com/index.json');

const associates = Object.fromEntries(
  samples.map(
    item => [item.name, item.examples]
  )
)

const events = await parseEvents();

let md = '';

for (const event of events) {
  const parentName = event.name.split('.')[0];
  const examples = associates[parentName];
  if (!examples) {
    continue;
  }

  const payloads = examples.filter(item => item.action === event.action);
  if (!payloads.length) continue;

  md += `## ${parentName}\n\n`;

  for (const payload of payloads) {
    const rendered = event.render(payload);
    await fse.mkdirp(`./test/snapshots/${parentName}`);
    await fse.writeFile(`./test/snapshots/${parentName}/${event.action}.md`, rendered);
    md += `### action: \`${event.action}\`\n\n`
    md += rendered;
    md += '\n\n---\n\n'
  }

  md += '\n'
}

const readmeMd = await fse.readFile('readme.template.md', 'utf-8');
const renderReadme = Handlebars.compile(readmeMd);
const output = renderReadme({ snapshot: md });
await fse.writeFile('readme.md', output, 'utf-8')