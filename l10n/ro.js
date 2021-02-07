OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "Șterge",
    "Restrict login to IP addresses" : "Limitați conectarea la adresele IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "Permite administratorilor să restricționeze conectările la instanța lor la anumite intervale de IP.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "Această aplicație permite administratorilor să restricționeze conectarea la\nserverul lor de Nextcloud la o plajă anume de IP-uri. Rețineți că sesiunile existente vor fi păstrate\ndeschise.\n\nIntervalele IP permise pot fi administrate folosind utilitarul de  linie de comandă OCC\nsau interfața grafică din setările de administrare. Dacă intenționați să utilizați utilitarul OCC,\nurmătoarele comenzi ar fi aplicabile.\n\nÎn lista albă „127.0.0.0 / 24”:\n\n- `occ config: app: set limit_login_to_ip whitelisted.ranges --valore 127.0.0.0 / 24`\n\nÎn lista albă „127.0.0.0 / 24” și, de asemenea, „192.168.0.0 / 24”:\n\n- `occ config: app: set limit_login_to_ip whitelisted.ranges --valore 127.0.0.0 / 24,192.168.0.0 / 24`",
    "Restrict login to IP ranges" : "Limitați conectarea la intervalele IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "Implicit, %s permite autentificarea de la orice adresă IP. Pentru a limita autentificările de la adrese IP specifice (subnet), le poti introduce mai jos.",
    "Add" : "Adaugă",
    "Not authorized" : "Neautorizat"
},
"nplurals=3; plural=(n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));");
