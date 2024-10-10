Hooks.on('ready', async () => {
    Handlebars.partials['systems/pf2e/templates/actors/character/limited.hbs'] = await getTemplate('systems/pf2e/templates/actors/character/sheet.hbs')
})
