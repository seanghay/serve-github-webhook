import fse from 'fs-extra'
import _ from 'lodash'
import { parseEvents } from '../src/events.js'

const samples = await fse.readJson('./node_modules/@octokit/webhooks-examples/api.github.com/index.json');

const associates = Object.fromEntries(
  samples.map(
    item => [item.name, item.examples]
  )
)

const events = await parseEvents();
for (const event of events) {
  const parentName = event.name.split('.')[0];
  const examples = associates[parentName];
  if (!examples) {
    continue;
  }

  const payloads = examples.filter(item => item.action === event.action);
  for (const payload of payloads) {
    const rendered = event.render(payload);
    await fse.mkdirp(`./test/snapshots/${parentName}`);
    await fse.writeFile(`./test/snapshots/${parentName}/${event.action}.md`, rendered);
  }
}


