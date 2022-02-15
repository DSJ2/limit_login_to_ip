OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Suprimeix",
    "Restrict login to IP addresses" : "Restricció de l'inici de sessió a adreces IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Permet que els administradors restringeixin els inicis de sessió en la seva instància a intervals d'IP específics.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Aquesta aplicació permet que els administradors restringeixin l'inici de sessió en el seu servidor\ndel Nextcloud a intervals d'IP específics. Tingueu en compte que es mantindran obertes les sessions existents.\n\nEls intervals d'IP permesos es poden administrar mitjançant la interfície de línia d'ordres OCC\no gràficament mitjançant la configuració de l'administrador. Si teniu previst utilitzar l'eina OCC,\ncaldria executar les ordres següents.\n\nPer a afegir `127.0.0.0/24` a la llista d'adreces permeses:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nPer a afegir `127.0.0.0/24` i també `192.168.0.0/24` a la llista d'adreces permeses:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`",
    "Restrict login to IP ranges" : "Restringeix l'inici de sessió a intervals d'IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Per defecte, el %s permet l'inici de sessió des de qualsevol adreça IP. Per a limitar l'inici de sessió a intervals d'IP específics, especifiqueu-los a continuació.",
    "Add" : "Afegeix",
    "Not authorized" : "Sense autorització"
},
"nplurals=2; plural=(n != 1);");
