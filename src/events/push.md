🎉 **{{ sender.login }}** pushed to `{{ repository.name }}` 
{{#each commits}}
- `{{ message }}` ({{ author.name }}) - [Open]({{ url }})
{{/each}}
[See changes]({{ compare }})