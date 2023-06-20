OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Kustuta",
    "Restrict login to IP addresses" : "Piira sisselogimine IP-aadressidele",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Võimaldab administraatoritel piirata serverisse sisselogimist kindlatele IP-vahemikele.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "See rakendus lubab administraatoritel keelata sisselogimine nende Nextcloud serverisse kindlatelt IP aadressi vahemikest. Pane tähele, et olemasolevad ühendust hoitakse avatuna. Lubatud IP aadressi vahemikke saab administreerida kasutades OCC-d käsurea liideses või graafiliselt kasutades administraatori seadeid. Kui sa plaanid kasutada OCC tööriista - kasuta järgmisi käske.\nEt lubada '127.0.0.0/24':\n-'occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24'.\nEt lubada '127.0.0.0/24' ja '192.168.0.0/24':\n-'occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24'.",
    "Restrict login to IP ranges" : "Piira sisselogimine IP-vahemikele",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Vaikimisi lubab %s sisse logida igalt IP-aadressilt. Selleks, et piirata sisselogimine kindlatele IP-vahemikele, saad need allpool määrata.",
    "Add" : "Lisa",
    "Not authorized" : "Pole autoriseeritud"
},
"nplurals=2; plural=(n != 1);");
