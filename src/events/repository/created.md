{{#if repository.private}}
📦 **{{ sender.login }}** created a **private** repository [{{ repository.full_name }}]({{ repository.html_url }})
{{else}}
📦 **{{ sender.login }}** created a **public** repository [{{ repository.full_name }}]({{ repository.html_url }})
{{/if}}
