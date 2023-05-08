Hooks.on('ready', async () => {
    _templateCache['systems/pf2e/templates/actors/character/limited.hbs'] = await getTemplate('systems/pf2e/templates/actors/character/sheet.hbs')
})
