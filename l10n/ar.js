OC.L10N.register(
    "limit_login_to_ip",
    {
    "Delete" : "حذف",
    "Restrict login to IP addresses" : "تقييد الدخول بحسب عناوين الـ IP",
    "Allows administrators to restrict logins to their instance to specific IP ranges." : "تمكين المشرفين من تقييد الدخول إلى خوادمهم بحسب مدى عناوين الـ IP.",
    "This app allows administrators to restrict login to their\nNextcloud server to specific IP ranges. Note that existing sessions will be kept\nopen.\n\nThe allowed IP ranges can be administrated using the OCC command line interface\nor graphically using the admin settings. If you plan to use the OCC tool, the\nfollowing commands would be applicable.\n\nTo whitelist `127.0.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24`\n\nTo whitelist `127.0.0.0/24` and also `192.168.0.0/24`:\n\n- `occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24`" : "هذا التطبيق يُمكّن المشرفين من تقييد الدخول إلى خوادمهم بحسب مدى عناوين الـ IP لطالبي الدخول. لاحظ أن الجلسات القائمة ستبقى سارية. \n\nمديات عناوين IP المسموح بدخولها يٌمكن إدارتها من خلال سطر أوامر نكست كلاود OCC\nأو من خلال شاشة إعدادات المشرف. إذا كنت تنوي استعمال سطر  الأوامر، يُمكنك استعمال الأوامر التالية.\n\n-  لتبييض العنوان `127.0.0.0/24` نعطي الأمر:  'occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24'\n\n- و لتبييض العناوين `127.0.0.0/24` و `192.168.0.0/24` أي للسماح لها بالدخول، نعطي الأمر: 'occ config:app:set limit_login_to_ip whitelisted.ranges --value 127.0.0.0/24,192.168.0.0/24'",
    "Restrict login to IP ranges" : "قيّد الدخول بحسب مدى عناوين الـ IP",
    "By default, %s permits logging-in from any IP address. To limit logins to specific IP ranges, you can specify those below." : "تلقائيّاً، %s يُسمح له بالدخول من أي عنوان IP يأتي منه. لحصر دخوله من عناوين محدّدة، يمُكنك تعيين هذه العناوين أدناه. ",
    "Add" : "إضافة",
    "Not authorized" : "غيرُ مُصرّحٍ له"
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");
