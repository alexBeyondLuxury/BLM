//	Modified from http://javascript.internet.com/forms/check-email.html

isEmailAddress = function(emailStr) 
	{
	// Version 2016103001, Last Updated Mon Oct 31 07:07:01 2016 UTC
	var tlds =
		{
		'AAA':true,
		'AARP':true,
		'ABARTH':true,
		'ABB':true,
		'ABBOTT':true,
		'ABBVIE':true,
		'ABC':true,
		'ABLE':true,
		'ABOGADO':true,
		'ABUDHABI':true,
		'AC':true,
		'ACADEMY':true,
		'ACCENTURE':true,
		'ACCOUNTANT':true,
		'ACCOUNTANTS':true,
		'ACO':true,
		'ACTIVE':true,
		'ACTOR':true,
		'AD':true,
		'ADAC':true,
		'ADS':true,
		'ADULT':true,
		'AE':true,
		'AEG':true,
		'AERO':true,
		'AETNA':true,
		'AF':true,
		'AFAMILYCOMPANY':true,
		'AFL':true,
		'AG':true,
		'AGAKHAN':true,
		'AGENCY':true,
		'AI':true,
		'AIG':true,
		'AIGO':true,
		'AIRBUS':true,
		'AIRFORCE':true,
		'AIRTEL':true,
		'AKDN':true,
		'AL':true,
		'ALFAROMEO':true,
		'ALIBABA':true,
		'ALIPAY':true,
		'ALLFINANZ':true,
		'ALLSTATE':true,
		'ALLY':true,
		'ALSACE':true,
		'ALSTOM':true,
		'AM':true,
		'AMERICANEXPRESS':true,
		'AMERICANFAMILY':true,
		'AMEX':true,
		'AMFAM':true,
		'AMICA':true,
		'AMSTERDAM':true,
		'ANALYTICS':true,
		'ANDROID':true,
		'ANQUAN':true,
		'ANZ':true,
		'AO':true,
		'APARTMENTS':true,
		'APP':true,
		'APPLE':true,
		'AQ':true,
		'AQUARELLE':true,
		'AR':true,
		'ARAMCO':true,
		'ARCHI':true,
		'ARMY':true,
		'ARPA':true,
		'ART':true,
		'ARTE':true,
		'AS':true,
		'ASDA':true,
		'ASIA':true,
		'ASSOCIATES':true,
		'AT':true,
		'ATHLETA':true,
		'ATTORNEY':true,
		'AU':true,
		'AUCTION':true,
		'AUDI':true,
		'AUDIBLE':true,
		'AUDIO':true,
		'AUSPOST':true,
		'AUTHOR':true,
		'AUTO':true,
		'AUTOS':true,
		'AVIANCA':true,
		'AW':true,
		'AWS':true,
		'AX':true,
		'AXA':true,
		'AZ':true,
		'AZURE':true,
		'BA':true,
		'BABY':true,
		'BAIDU':true,
		'BANAMEX':true,
		'BANANAREPUBLIC':true,
		'BAND':true,
		'BANK':true,
		'BAR':true,
		'BARCELONA':true,
		'BARCLAYCARD':true,
		'BARCLAYS':true,
		'BAREFOOT':true,
		'BARGAINS':true,
		'BASEBALL':true,
		'BASKETBALL':true,
		'BAUHAUS':true,
		'BAYERN':true,
		'BB':true,
		'BBC':true,
		'BBT':true,
		'BBVA':true,
		'BCG':true,
		'BCN':true,
		'BD':true,
		'BE':true,
		'BEATS':true,
		'BEAUTY':true,
		'BEER':true,
		'BENTLEY':true,
		'BERLIN':true,
		'BEST':true,
		'BESTBUY':true,
		'BET':true,
		'BF':true,
		'BG':true,
		'BH':true,
		'BHARTI':true,
		'BI':true,
		'BIBLE':true,
		'BID':true,
		'BIKE':true,
		'BING':true,
		'BINGO':true,
		'BIO':true,
		'BIZ':true,
		'BJ':true,
		'BLACK':true,
		'BLACKFRIDAY':true,
		'BLANCO':true,
		'BLOCKBUSTER':true,
		'BLOG':true,
		'BLOOMBERG':true,
		'BLUE':true,
		'BM':true,
		'BMS':true,
		'BMW':true,
		'BN':true,
		'BNL':true,
		'BNPPARIBAS':true,
		'BO':true,
		'BOATS':true,
		'BOEHRINGER':true,
		'BOFA':true,
		'BOM':true,
		'BOND':true,
		'BOO':true,
		'BOOK':true,
		'BOOKING':true,
		'BOOTS':true,
		'BOSCH':true,
		'BOSTIK':true,
		'BOT':true,
		'BOUTIQUE':true,
		'BR':true,
		'BRADESCO':true,
		'BRIDGESTONE':true,
		'BROADWAY':true,
		'BROKER':true,
		'BROTHER':true,
		'BRUSSELS':true,
		'BS':true,
		'BT':true,
		'BUDAPEST':true,
		'BUGATTI':true,
		'BUILD':true,
		'BUILDERS':true,
		'BUSINESS':true,
		'BUY':true,
		'BUZZ':true,
		'BV':true,
		'BW':true,
		'BY':true,
		'BZ':true,
		'BZH':true,
		'CA':true,
		'CAB':true,
		'CAFE':true,
		'CAL':true,
		'CALL':true,
		'CALVINKLEIN':true,
		'CAM':true,
		'CAMERA':true,
		'CAMP':true,
		'CANCERRESEARCH':true,
		'CANON':true,
		'CAPETOWN':true,
		'CAPITAL':true,
		'CAPITALONE':true,
		'CAR':true,
		'CARAVAN':true,
		'CARDS':true,
		'CARE':true,
		'CAREER':true,
		'CAREERS':true,
		'CARS':true,
		'CARTIER':true,
		'CASA':true,
		'CASE':true,
		'CASEIH':true,
		'CASH':true,
		'CASINO':true,
		'CAT':true,
		'CATERING':true,
		'CBA':true,
		'CBN':true,
		'CBRE':true,
		'CBS':true,
		'CC':true,
		'CD':true,
		'CEB':true,
		'CENTER':true,
		'CEO':true,
		'CERN':true,
		'CF':true,
		'CFA':true,
		'CFD':true,
		'CG':true,
		'CH':true,
		'CHANEL':true,
		'CHANNEL':true,
		'CHASE':true,
		'CHAT':true,
		'CHEAP':true,
		'CHINTAI':true,
		'CHLOE':true,
		'CHRISTMAS':true,
		'CHROME':true,
		'CHRYSLER':true,
		'CHURCH':true,
		'CI':true,
		'CIPRIANI':true,
		'CIRCLE':true,
		'CISCO':true,
		'CITADEL':true,
		'CITI':true,
		'CITIC':true,
		'CITY':true,
		'CITYEATS':true,
		'CK':true,
		'CL':true,
		'CLAIMS':true,
		'CLEANING':true,
		'CLICK':true,
		'CLINIC':true,
		'CLINIQUE':true,
		'CLOTHING':true,
		'CLOUD':true,
		'CLUB':true,
		'CLUBMED':true,
		'CM':true,
		'CN':true,
		'CO':true,
		'COACH':true,
		'CODES':true,
		'COFFEE':true,
		'COLLEGE':true,
		'COLOGNE':true,
		'COM':true,
		'COMCAST':true,
		'COMMBANK':true,
		'COMMUNITY':true,
		'COMPANY':true,
		'COMPARE':true,
		'COMPUTER':true,
		'COMSEC':true,
		'CONDOS':true,
		'CONSTRUCTION':true,
		'CONSULTING':true,
		'CONTACT':true,
		'CONTRACTORS':true,
		'COOKING':true,
		'COOKINGCHANNEL':true,
		'COOL':true,
		'COOP':true,
		'CORSICA':true,
		'COUNTRY':true,
		'COUPON':true,
		'COUPONS':true,
		'COURSES':true,
		'CR':true,
		'CREDIT':true,
		'CREDITCARD':true,
		'CREDITUNION':true,
		'CRICKET':true,
		'CROWN':true,
		'CRS':true,
		'CRUISES':true,
		'CSC':true,
		'CU':true,
		'CUISINELLA':true,
		'CV':true,
		'CW':true,
		'CX':true,
		'CY':true,
		'CYMRU':true,
		'CYOU':true,
		'CZ':true,
		'DABUR':true,
		'DAD':true,
		'DANCE':true,
		'DATE':true,
		'DATING':true,
		'DATSUN':true,
		'DAY':true,
		'DCLK':true,
		'DDS':true,
		'DE':true,
		'DEAL':true,
		'DEALER':true,
		'DEALS':true,
		'DEGREE':true,
		'DELIVERY':true,
		'DELL':true,
		'DELOITTE':true,
		'DELTA':true,
		'DEMOCRAT':true,
		'DENTAL':true,
		'DENTIST':true,
		'DESI':true,
		'DESIGN':true,
		'DEV':true,
		'DHL':true,
		'DIAMONDS':true,
		'DIET':true,
		'DIGITAL':true,
		'DIRECT':true,
		'DIRECTORY':true,
		'DISCOUNT':true,
		'DISCOVER':true,
		'DISH':true,
		'DIY':true,
		'DJ':true,
		'DK':true,
		'DM':true,
		'DNP':true,
		'DO':true,
		'DOCS':true,
		'DOCTOR':true,
		'DODGE':true,
		'DOG':true,
		'DOHA':true,
		'DOMAINS':true,
		'DOT':true,
		'DOWNLOAD':true,
		'DRIVE':true,
		'DTV':true,
		'DUBAI':true,
		'DUCK':true,
		'DUNLOP':true,
		'DUNS':true,
		'DUPONT':true,
		'DURBAN':true,
		'DVAG':true,
		'DVR':true,
		'DZ':true,
		'EARTH':true,
		'EAT':true,
		'EC':true,
		'ECO':true,
		'EDEKA':true,
		'EDU':true,
		'EDUCATION':true,
		'EE':true,
		'EG':true,
		'EMAIL':true,
		'EMERCK':true,
		'ENERGY':true,
		'ENGINEER':true,
		'ENGINEERING':true,
		'ENTERPRISES':true,
		'EPOST':true,
		'EPSON':true,
		'EQUIPMENT':true,
		'ER':true,
		'ERICSSON':true,
		'ERNI':true,
		'ES':true,
		'ESQ':true,
		'ESTATE':true,
		'ESURANCE':true,
		'ET':true,
		'EU':true,
		'EUROVISION':true,
		'EUS':true,
		'EVENTS':true,
		'EVERBANK':true,
		'EXCHANGE':true,
		'EXPERT':true,
		'EXPOSED':true,
		'EXPRESS':true,
		'EXTRASPACE':true,
		'FAGE':true,
		'FAIL':true,
		'FAIRWINDS':true,
		'FAITH':true,
		'FAMILY':true,
		'FAN':true,
		'FANS':true,
		'FARM':true,
		'FARMERS':true,
		'FASHION':true,
		'FAST':true,
		'FEDEX':true,
		'FEEDBACK':true,
		'FERRARI':true,
		'FERRERO':true,
		'FI':true,
		'FIAT':true,
		'FIDELITY':true,
		'FIDO':true,
		'FILM':true,
		'FINAL':true,
		'FINANCE':true,
		'FINANCIAL':true,
		'FIRE':true,
		'FIRESTONE':true,
		'FIRMDALE':true,
		'FISH':true,
		'FISHING':true,
		'FIT':true,
		'FITNESS':true,
		'FJ':true,
		'FK':true,
		'FLICKR':true,
		'FLIGHTS':true,
		'FLIR':true,
		'FLORIST':true,
		'FLOWERS':true,
		'FLY':true,
		'FM':true,
		'FO':true,
		'FOO':true,
		'FOODNETWORK':true,
		'FOOTBALL':true,
		'FORD':true,
		'FOREX':true,
		'FORSALE':true,
		'FORUM':true,
		'FOUNDATION':true,
		'FOX':true,
		'FR':true,
		'FRESENIUS':true,
		'FRL':true,
		'FROGANS':true,
		'FRONTDOOR':true,
		'FRONTIER':true,
		'FTR':true,
		'FUJITSU':true,
		'FUJIXEROX':true,
		'FUND':true,
		'FURNITURE':true,
		'FUTBOL':true,
		'FYI':true,
		'GA':true,
		'GAL':true,
		'GALLERY':true,
		'GALLO':true,
		'GALLUP':true,
		'GAME':true,
		'GAMES':true,
		'GAP':true,
		'GARDEN':true,
		'GB':true,
		'GBIZ':true,
		'GD':true,
		'GDN':true,
		'GE':true,
		'GEA':true,
		'GENT':true,
		'GENTING':true,
		'GEORGE':true,
		'GF':true,
		'GG':true,
		'GGEE':true,
		'GH':true,
		'GI':true,
		'GIFT':true,
		'GIFTS':true,
		'GIVES':true,
		'GIVING':true,
		'GL':true,
		'GLADE':true,
		'GLASS':true,
		'GLE':true,
		'GLOBAL':true,
		'GLOBO':true,
		'GM':true,
		'GMAIL':true,
		'GMBH':true,
		'GMO':true,
		'GMX':true,
		'GN':true,
		'GODADDY':true,
		'GOLD':true,
		'GOLDPOINT':true,
		'GOLF':true,
		'GOO':true,
		'GOODHANDS':true,
		'GOODYEAR':true,
		'GOOG':true,
		'GOOGLE':true,
		'GOP':true,
		'GOT':true,
		'GOV':true,
		'GP':true,
		'GQ':true,
		'GR':true,
		'GRAINGER':true,
		'GRAPHICS':true,
		'GRATIS':true,
		'GREEN':true,
		'GRIPE':true,
		'GROUP':true,
		'GS':true,
		'GT':true,
		'GU':true,
		'GUARDIAN':true,
		'GUCCI':true,
		'GUGE':true,
		'GUIDE':true,
		'GUITARS':true,
		'GURU':true,
		'GW':true,
		'GY':true,
		'HAMBURG':true,
		'HANGOUT':true,
		'HAUS':true,
		'HBO':true,
		'HDFC':true,
		'HDFCBANK':true,
		'HEALTH':true,
		'HEALTHCARE':true,
		'HELP':true,
		'HELSINKI':true,
		'HERE':true,
		'HERMES':true,
		'HGTV':true,
		'HIPHOP':true,
		'HISAMITSU':true,
		'HITACHI':true,
		'HIV':true,
		'HK':true,
		'HKT':true,
		'HM':true,
		'HN':true,
		'HOCKEY':true,
		'HOLDINGS':true,
		'HOLIDAY':true,
		'HOMEDEPOT':true,
		'HOMEGOODS':true,
		'HOMES':true,
		'HOMESENSE':true,
		'HONDA':true,
		'HONEYWELL':true,
		'HORSE':true,
		'HOST':true,
		'HOSTING':true,
		'HOT':true,
		'HOTELES':true,
		'HOTMAIL':true,
		'HOUSE':true,
		'HOW':true,
		'HR':true,
		'HSBC':true,
		'HT':true,
		'HTC':true,
		'HU':true,
		'HUGHES':true,
		'HYATT':true,
		'HYUNDAI':true,
		'IBM':true,
		'ICBC':true,
		'ICE':true,
		'ICU':true,
		'ID':true,
		'IE':true,
		'IEEE':true,
		'IFM':true,
		'IINET':true,
		'IKANO':true,
		'IL':true,
		'IM':true,
		'IMAMAT':true,
		'IMDB':true,
		'IMMO':true,
		'IMMOBILIEN':true,
		'IN':true,
		'INDUSTRIES':true,
		'INFINITI':true,
		'INFO':true,
		'ING':true,
		'INK':true,
		'INSTITUTE':true,
		'INSURANCE':true,
		'INSURE':true,
		'INT':true,
		'INTEL':true,
		'INTERNATIONAL':true,
		'INTUIT':true,
		'INVESTMENTS':true,
		'IO':true,
		'IPIRANGA':true,
		'IQ':true,
		'IR':true,
		'IRISH':true,
		'IS':true,
		'ISELECT':true,
		'ISMAILI':true,
		'IST':true,
		'ISTANBUL':true,
		'IT':true,
		'ITAU':true,
		'ITV':true,
		'IVECO':true,
		'IWC':true,
		'JAGUAR':true,
		'JAVA':true,
		'JCB':true,
		'JCP':true,
		'JE':true,
		'JEEP':true,
		'JETZT':true,
		'JEWELRY':true,
		'JLC':true,
		'JLL':true,
		'JM':true,
		'JMP':true,
		'JNJ':true,
		'JO':true,
		'JOBS':true,
		'JOBURG':true,
		'JOT':true,
		'JOY':true,
		'JP':true,
		'JPMORGAN':true,
		'JPRS':true,
		'JUEGOS':true,
		'JUNIPER':true,
		'KAUFEN':true,
		'KDDI':true,
		'KE':true,
		'KERRYHOTELS':true,
		'KERRYLOGISTICS':true,
		'KERRYPROPERTIES':true,
		'KFH':true,
		'KG':true,
		'KH':true,
		'KI':true,
		'KIA':true,
		'KIM':true,
		'KINDER':true,
		'KINDLE':true,
		'KITCHEN':true,
		'KIWI':true,
		'KM':true,
		'KN':true,
		'KOELN':true,
		'KOMATSU':true,
		'KOSHER':true,
		'KP':true,
		'KPMG':true,
		'KPN':true,
		'KR':true,
		'KRD':true,
		'KRED':true,
		'KUOKGROUP':true,
		'KW':true,
		'KY':true,
		'KYOTO':true,
		'KZ':true,
		'LA':true,
		'LACAIXA':true,
		'LADBROKES':true,
		'LAMBORGHINI':true,
		'LAMER':true,
		'LANCASTER':true,
		'LANCIA':true,
		'LANCOME':true,
		'LAND':true,
		'LANDROVER':true,
		'LANXESS':true,
		'LASALLE':true,
		'LAT':true,
		'LATINO':true,
		'LATROBE':true,
		'LAW':true,
		'LAWYER':true,
		'LB':true,
		'LC':true,
		'LDS':true,
		'LEASE':true,
		'LECLERC':true,
		'LEFRAK':true,
		'LEGAL':true,
		'LEGO':true,
		'LEXUS':true,
		'LGBT':true,
		'LI':true,
		'LIAISON':true,
		'LIDL':true,
		'LIFE':true,
		'LIFEINSURANCE':true,
		'LIFESTYLE':true,
		'LIGHTING':true,
		'LIKE':true,
		'LILLY':true,
		'LIMITED':true,
		'LIMO':true,
		'LINCOLN':true,
		'LINDE':true,
		'LINK':true,
		'LIPSY':true,
		'LIVE':true,
		'LIVING':true,
		'LIXIL':true,
		'LK':true,
		'LOAN':true,
		'LOANS':true,
		'LOCKER':true,
		'LOCUS':true,
		'LOFT':true,
		'LOL':true,
		'LONDON':true,
		'LOTTE':true,
		'LOTTO':true,
		'LOVE':true,
		'LPL':true,
		'LPLFINANCIAL':true,
		'LR':true,
		'LS':true,
		'LT':true,
		'LTD':true,
		'LTDA':true,
		'LU':true,
		'LUNDBECK':true,
		'LUPIN':true,
		'LUXE':true,
		'LUXURY':true,
		'LV':true,
		'LY':true,
		'MA':true,
		'MACYS':true,
		'MADRID':true,
		'MAIF':true,
		'MAISON':true,
		'MAKEUP':true,
		'MAN':true,
		'MANAGEMENT':true,
		'MANGO':true,
		'MARKET':true,
		'MARKETING':true,
		'MARKETS':true,
		'MARRIOTT':true,
		'MARSHALLS':true,
		'MASERATI':true,
		'MATTEL':true,
		'MBA':true,
		'MC':true,
		'MCD':true,
		'MCDONALDS':true,
		'MCKINSEY':true,
		'MD':true,
		'ME':true,
		'MED':true,
		'MEDIA':true,
		'MEET':true,
		'MELBOURNE':true,
		'MEME':true,
		'MEMORIAL':true,
		'MEN':true,
		'MENU':true,
		'MEO':true,
		'METLIFE':true,
		'MG':true,
		'MH':true,
		'MIAMI':true,
		'MICROSOFT':true,
		'MIL':true,
		'MINI':true,
		'MINT':true,
		'MIT':true,
		'MITSUBISHI':true,
		'MK':true,
		'ML':true,
		'MLB':true,
		'MLS':true,
		'MM':true,
		'MMA':true,
		'MN':true,
		'MO':true,
		'MOBI':true,
		'MOBILY':true,
		'MODA':true,
		'MOE':true,
		'MOI':true,
		'MOM':true,
		'MONASH':true,
		'MONEY':true,
		'MONSTER':true,
		'MONTBLANC':true,
		'MOPAR':true,
		'MORMON':true,
		'MORTGAGE':true,
		'MOSCOW':true,
		'MOTORCYCLES':true,
		'MOV':true,
		'MOVIE':true,
		'MOVISTAR':true,
		'MP':true,
		'MQ':true,
		'MR':true,
		'MS':true,
		'MSD':true,
		'MT':true,
		'MTN':true,
		'MTPC':true,
		'MTR':true,
		'MU':true,
		'MUSEUM':true,
		'MUTUAL':true,
		'MUTUELLE':true,
		'MV':true,
		'MW':true,
		'MX':true,
		'MY':true,
		'MZ':true,
		'NA':true,
		'NAB':true,
		'NADEX':true,
		'NAGOYA':true,
		'NAME':true,
		'NATIONWIDE':true,
		'NATURA':true,
		'NAVY':true,
		'NBA':true,
		'NC':true,
		'NE':true,
		'NEC':true,
		'NET':true,
		'NETBANK':true,
		'NETFLIX':true,
		'NETWORK':true,
		'NEUSTAR':true,
		'NEW':true,
		'NEWHOLLAND':true,
		'NEWS':true,
		'NEXT':true,
		'NEXTDIRECT':true,
		'NEXUS':true,
		'NF':true,
		'NFL':true,
		'NG':true,
		'NGO':true,
		'NHK':true,
		'NI':true,
		'NICO':true,
		'NIKE':true,
		'NIKON':true,
		'NINJA':true,
		'NISSAN':true,
		'NISSAY':true,
		'NL':true,
		'NO':true,
		'NOKIA':true,
		'NORTHWESTERNMUTUAL':true,
		'NORTON':true,
		'NOW':true,
		'NOWRUZ':true,
		'NOWTV':true,
		'NP':true,
		'NR':true,
		'NRA':true,
		'NRW':true,
		'NTT':true,
		'NU':true,
		'NYC':true,
		'NZ':true,
		'OBI':true,
		'OBSERVER':true,
		'OFF':true,
		'OFFICE':true,
		'OKINAWA':true,
		'OLAYAN':true,
		'OLAYANGROUP':true,
		'OLDNAVY':true,
		'OLLO':true,
		'OM':true,
		'OMEGA':true,
		'ONE':true,
		'ONG':true,
		'ONL':true,
		'ONLINE':true,
		'ONYOURSIDE':true,
		'OOO':true,
		'OPEN':true,
		'ORACLE':true,
		'ORANGE':true,
		'ORG':true,
		'ORGANIC':true,
		'ORIENTEXPRESS':true,
		'ORIGINS':true,
		'OSAKA':true,
		'OTSUKA':true,
		'OTT':true,
		'OVH':true,
		'PA':true,
		'PAGE':true,
		'PAMPEREDCHEF':true,
		'PANASONIC':true,
		'PANERAI':true,
		'PARIS':true,
		'PARS':true,
		'PARTNERS':true,
		'PARTS':true,
		'PARTY':true,
		'PASSAGENS':true,
		'PAY':true,
		'PCCW':true,
		'PE':true,
		'PET':true,
		'PF':true,
		'PFIZER':true,
		'PG':true,
		'PH':true,
		'PHARMACY':true,
		'PHILIPS':true,
		'PHOTO':true,
		'PHOTOGRAPHY':true,
		'PHOTOS':true,
		'PHYSIO':true,
		'PIAGET':true,
		'PICS':true,
		'PICTET':true,
		'PICTURES':true,
		'PID':true,
		'PIN':true,
		'PING':true,
		'PINK':true,
		'PIONEER':true,
		'PIZZA':true,
		'PK':true,
		'PL':true,
		'PLACE':true,
		'PLAY':true,
		'PLAYSTATION':true,
		'PLUMBING':true,
		'PLUS':true,
		'PM':true,
		'PN':true,
		'PNC':true,
		'POHL':true,
		'POKER':true,
		'POLITIE':true,
		'PORN':true,
		'POST':true,
		'PR':true,
		'PRAMERICA':true,
		'PRAXI':true,
		'PRESS':true,
		'PRIME':true,
		'PRO':true,
		'PROD':true,
		'PRODUCTIONS':true,
		'PROF':true,
		'PROGRESSIVE':true,
		'PROMO':true,
		'PROPERTIES':true,
		'PROPERTY':true,
		'PROTECTION':true,
		'PRU':true,
		'PRUDENTIAL':true,
		'PS':true,
		'PT':true,
		'PUB':true,
		'PW':true,
		'PWC':true,
		'PY':true,
		'QA':true,
		'QPON':true,
		'QUEBEC':true,
		'QUEST':true,
		'QVC':true,
		'RACING':true,
		'RADIO':true,
		'RAID':true,
		'RE':true,
		'READ':true,
		'REALESTATE':true,
		'REALTOR':true,
		'REALTY':true,
		'RECIPES':true,
		'RED':true,
		'REDSTONE':true,
		'REDUMBRELLA':true,
		'REHAB':true,
		'REISE':true,
		'REISEN':true,
		'REIT':true,
		'REN':true,
		'RENT':true,
		'RENTALS':true,
		'REPAIR':true,
		'REPORT':true,
		'REPUBLICAN':true,
		'REST':true,
		'RESTAURANT':true,
		'REVIEW':true,
		'REVIEWS':true,
		'REXROTH':true,
		'RICH':true,
		'RICHARDLI':true,
		'RICOH':true,
		'RIGHTATHOME':true,
		'RIO':true,
		'RIP':true,
		'RO':true,
		'ROCHER':true,
		'ROCKS':true,
		'RODEO':true,
		'ROGERS':true,
		'ROOM':true,
		'RS':true,
		'RSVP':true,
		'RU':true,
		'RUHR':true,
		'RUN':true,
		'RW':true,
		'RWE':true,
		'RYUKYU':true,
		'SA':true,
		'SAARLAND':true,
		'SAFE':true,
		'SAFETY':true,
		'SAKURA':true,
		'SALE':true,
		'SALON':true,
		'SAMSCLUB':true,
		'SAMSUNG':true,
		'SANDVIK':true,
		'SANDVIKCOROMANT':true,
		'SANOFI':true,
		'SAP':true,
		'SAPO':true,
		'SARL':true,
		'SAS':true,
		'SAVE':true,
		'SAXO':true,
		'SB':true,
		'SBI':true,
		'SBS':true,
		'SC':true,
		'SCA':true,
		'SCB':true,
		'SCHAEFFLER':true,
		'SCHMIDT':true,
		'SCHOLARSHIPS':true,
		'SCHOOL':true,
		'SCHULE':true,
		'SCHWARZ':true,
		'SCIENCE':true,
		'SCJOHNSON':true,
		'SCOR':true,
		'SCOT':true,
		'SD':true,
		'SE':true,
		'SEAT':true,
		'SECURE':true,
		'SECURITY':true,
		'SEEK':true,
		'SELECT':true,
		'SENER':true,
		'SERVICES':true,
		'SES':true,
		'SEVEN':true,
		'SEW':true,
		'SEX':true,
		'SEXY':true,
		'SFR':true,
		'SG':true,
		'SH':true,
		'SHANGRILA':true,
		'SHARP':true,
		'SHAW':true,
		'SHELL':true,
		'SHIA':true,
		'SHIKSHA':true,
		'SHOES':true,
		'SHOP':true,
		'SHOPPING':true,
		'SHOUJI':true,
		'SHOW':true,
		'SHOWTIME':true,
		'SHRIRAM':true,
		'SI':true,
		'SILK':true,
		'SINA':true,
		'SINGLES':true,
		'SITE':true,
		'SJ':true,
		'SK':true,
		'SKI':true,
		'SKIN':true,
		'SKY':true,
		'SKYPE':true,
		'SL':true,
		'SLING':true,
		'SM':true,
		'SMART':true,
		'SMILE':true,
		'SN':true,
		'SNCF':true,
		'SO':true,
		'SOCCER':true,
		'SOCIAL':true,
		'SOFTBANK':true,
		'SOFTWARE':true,
		'SOHU':true,
		'SOLAR':true,
		'SOLUTIONS':true,
		'SONG':true,
		'SONY':true,
		'SOY':true,
		'SPACE':true,
		'SPIEGEL':true,
		'SPOT':true,
		'SPREADBETTING':true,
		'SR':true,
		'SRL':true,
		'SRT':true,
		'ST':true,
		'STADA':true,
		'STAPLES':true,
		'STAR':true,
		'STARHUB':true,
		'STATEBANK':true,
		'STATEFARM':true,
		'STATOIL':true,
		'STC':true,
		'STCGROUP':true,
		'STOCKHOLM':true,
		'STORAGE':true,
		'STORE':true,
		'STREAM':true,
		'STUDIO':true,
		'STUDY':true,
		'STYLE':true,
		'SU':true,
		'SUCKS':true,
		'SUPPLIES':true,
		'SUPPLY':true,
		'SUPPORT':true,
		'SURF':true,
		'SURGERY':true,
		'SUZUKI':true,
		'SV':true,
		'SWATCH':true,
		'SWIFTCOVER':true,
		'SWISS':true,
		'SX':true,
		'SY':true,
		'SYDNEY':true,
		'SYMANTEC':true,
		'SYSTEMS':true,
		'SZ':true,
		'TAB':true,
		'TAIPEI':true,
		'TALK':true,
		'TAOBAO':true,
		'TARGET':true,
		'TATAMOTORS':true,
		'TATAR':true,
		'TATTOO':true,
		'TAX':true,
		'TAXI':true,
		'TC':true,
		'TCI':true,
		'TD':true,
		'TDK':true,
		'TEAM':true,
		'TECH':true,
		'TECHNOLOGY':true,
		'TEL':true,
		'TELECITY':true,
		'TELEFONICA':true,
		'TEMASEK':true,
		'TENNIS':true,
		'TEVA':true,
		'TF':true,
		'TG':true,
		'TH':true,
		'THD':true,
		'THEATER':true,
		'THEATRE':true,
		'TIAA':true,
		'TICKETS':true,
		'TIENDA':true,
		'TIFFANY':true,
		'TIPS':true,
		'TIRES':true,
		'TIROL':true,
		'TJ':true,
		'TJMAXX':true,
		'TJX':true,
		'TK':true,
		'TKMAXX':true,
		'TL':true,
		'TM':true,
		'TMALL':true,
		'TN':true,
		'TO':true,
		'TODAY':true,
		'TOKYO':true,
		'TOOLS':true,
		'TOP':true,
		'TORAY':true,
		'TOSHIBA':true,
		'TOTAL':true,
		'TOURS':true,
		'TOWN':true,
		'TOYOTA':true,
		'TOYS':true,
		'TR':true,
		'TRADE':true,
		'TRADING':true,
		'TRAINING':true,
		'TRAVEL':true,
		'TRAVELCHANNEL':true,
		'TRAVELERS':true,
		'TRAVELERSINSURANCE':true,
		'TRUST':true,
		'TRV':true,
		'TT':true,
		'TUBE':true,
		'TUI':true,
		'TUNES':true,
		'TUSHU':true,
		'TV':true,
		'TVS':true,
		'TW':true,
		'TZ':true,
		'UA':true,
		'UBANK':true,
		'UBS':true,
		'UCONNECT':true,
		'UG':true,
		'UK':true,
		'UNICOM':true,
		'UNIVERSITY':true,
		'UNO':true,
		'UOL':true,
		'UPS':true,
		'US':true,
		'UY':true,
		'UZ':true,
		'VA':true,
		'VACATIONS':true,
		'VANA':true,
		'VANGUARD':true,
		'VC':true,
		'VE':true,
		'VEGAS':true,
		'VENTURES':true,
		'VERISIGN':true,
		'VERSICHERUNG':true,
		'VET':true,
		'VG':true,
		'VI':true,
		'VIAJES':true,
		'VIDEO':true,
		'VIG':true,
		'VIKING':true,
		'VILLAS':true,
		'VIN':true,
		'VIP':true,
		'VIRGIN':true,
		'VISA':true,
		'VISION':true,
		'VISTA':true,
		'VISTAPRINT':true,
		'VIVA':true,
		'VIVO':true,
		'VLAANDEREN':true,
		'VN':true,
		'VODKA':true,
		'VOLKSWAGEN':true,
		'VOLVO':true,
		'VOTE':true,
		'VOTING':true,
		'VOTO':true,
		'VOYAGE':true,
		'VU':true,
		'VUELOS':true,
		'WALES':true,
		'WALMART':true,
		'WALTER':true,
		'WANG':true,
		'WANGGOU':true,
		'WARMAN':true,
		'WATCH':true,
		'WATCHES':true,
		'WEATHER':true,
		'WEATHERCHANNEL':true,
		'WEBCAM':true,
		'WEBER':true,
		'WEBSITE':true,
		'WED':true,
		'WEDDING':true,
		'WEIBO':true,
		'WEIR':true,
		'WF':true,
		'WHOSWHO':true,
		'WIEN':true,
		'WIKI':true,
		'WILLIAMHILL':true,
		'WIN':true,
		'WINDOWS':true,
		'WINE':true,
		'WINNERS':true,
		'WME':true,
		'WOLTERSKLUWER':true,
		'WOODSIDE':true,
		'WORK':true,
		'WORKS':true,
		'WORLD':true,
		'WOW':true,
		'WS':true,
		'WTC':true,
		'WTF':true,
		'XBOX':true,
		'XEROX':true,
		'XFINITY':true,
		'XIHUAN':true,
		'XIN':true,
		'XN--11B4C3D':true,
		'XN--1CK2E1B':true,
		'XN--1QQW23A':true,
		'XN--30RR7Y':true,
		'XN--3BST00M':true,
		'XN--3DS443G':true,
		'XN--3E0B707E':true,
		'XN--3OQ18VL8PN36A':true,
		'XN--3PXU8K':true,
		'XN--42C2D9A':true,
		'XN--45BRJ9C':true,
		'XN--45Q11C':true,
		'XN--4GBRIM':true,
		'XN--54B7FTA0CC':true,
		'XN--55QW42G':true,
		'XN--55QX5D':true,
		'XN--5SU34J936BGSG':true,
		'XN--5TZM5G':true,
		'XN--6FRZ82G':true,
		'XN--6QQ986B3XL':true,
		'XN--80ADXHKS':true,
		'XN--80AO21A':true,
		'XN--80ASEHDB':true,
		'XN--80ASWG':true,
		'XN--8Y0A063A':true,
		'XN--90A3AC':true,
		'XN--90AE':true,
		'XN--90AIS':true,
		'XN--9DBQ2A':true,
		'XN--9ET52U':true,
		'XN--9KRT00A':true,
		'XN--B4W605FERD':true,
		'XN--BCK1B9A5DRE4C':true,
		'XN--C1AVG':true,
		'XN--C2BR7G':true,
		'XN--CCK2B3B':true,
		'XN--CG4BKI':true,
		'XN--CLCHC0EA0B2G2A9GCD':true,
		'XN--CZR694B':true,
		'XN--CZRS0T':true,
		'XN--CZRU2D':true,
		'XN--D1ACJ3B':true,
		'XN--D1ALF':true,
		'XN--E1A4C':true,
		'XN--ECKVDTC9D':true,
		'XN--EFVY88H':true,
		'XN--ESTV75G':true,
		'XN--FCT429K':true,
		'XN--FHBEI':true,
		'XN--FIQ228C5HS':true,
		'XN--FIQ64B':true,
		'XN--FIQS8S':true,
		'XN--FIQZ9S':true,
		'XN--FJQ720A':true,
		'XN--FLW351E':true,
		'XN--FPCRJ9C3D':true,
		'XN--FZC2C9E2C':true,
		'XN--FZYS8D69UVGM':true,
		'XN--G2XX48C':true,
		'XN--GCKR3F0F':true,
		'XN--GECRJ9C':true,
		'XN--GK3AT1E':true,
		'XN--H2BRJ9C':true,
		'XN--HXT814E':true,
		'XN--I1B6B1A6A2E':true,
		'XN--IMR513N':true,
		'XN--IO0A7I':true,
		'XN--J1AEF':true,
		'XN--J1AMH':true,
		'XN--J6W193G':true,
		'XN--JLQ61U9W7B':true,
		'XN--JVR189M':true,
		'XN--KCRX77D1X4A':true,
		'XN--KPRW13D':true,
		'XN--KPRY57D':true,
		'XN--KPU716F':true,
		'XN--KPUT3I':true,
		'XN--L1ACC':true,
		'XN--LGBBAT1AD8J':true,
		'XN--MGB9AWBF':true,
		'XN--MGBA3A3EJT':true,
		'XN--MGBA3A4F16A':true,
		'XN--MGBA7C0BBN0A':true,
		'XN--MGBAAM7A8H':true,
		'XN--MGBAB2BD':true,
		'XN--MGBAYH7GPA':true,
		'XN--MGBB9FBPOB':true,
		'XN--MGBBH1A71E':true,
		'XN--MGBC0A9AZCG':true,
		'XN--MGBCA7DZDO':true,
		'XN--MGBERP4A5D4AR':true,
		'XN--MGBPL2FH':true,
		'XN--MGBT3DHD':true,
		'XN--MGBTX2B':true,
		'XN--MGBX4CD0AB':true,
		'XN--MIX891F':true,
		'XN--MK1BU44C':true,
		'XN--MXTQ1M':true,
		'XN--NGBC5AZD':true,
		'XN--NGBE9E0A':true,
		'XN--NODE':true,
		'XN--NQV7F':true,
		'XN--NQV7FS00EMA':true,
		'XN--NYQY26A':true,
		'XN--O3CW4H':true,
		'XN--OGBPF8FL':true,
		'XN--P1ACF':true,
		'XN--P1AI':true,
		'XN--PBT977C':true,
		'XN--PGBS0DH':true,
		'XN--PSSY2U':true,
		'XN--Q9JYB4C':true,
		'XN--QCKA1PMC':true,
		'XN--QXAM':true,
		'XN--RHQV96G':true,
		'XN--ROVU88B':true,
		'XN--S9BRJ9C':true,
		'XN--SES554G':true,
		'XN--T60B56A':true,
		'XN--TCKWE':true,
		'XN--UNUP4Y':true,
		'XN--VERMGENSBERATER-CTB':true,
		'XN--VERMGENSBERATUNG-PWB':true,
		'XN--VHQUV':true,
		'XN--VUQ861B':true,
		'XN--W4R85EL8FHU5DNRA':true,
		'XN--W4RS40L':true,
		'XN--WGBH1C':true,
		'XN--WGBL6A':true,
		'XN--XHQ521B':true,
		'XN--XKC2AL3HYE2A':true,
		'XN--XKC2DL3A5EE0H':true,
		'XN--Y9A3AQ':true,
		'XN--YFRO4I67O':true,
		'XN--YGBI2AMMX':true,
		'XN--ZFR164B':true,
		'XPERIA':true,
		'XXX':true,
		'XYZ':true,
		'YACHTS':true,
		'YAHOO':true,
		'YAMAXUN':true,
		'YANDEX':true,
		'YE':true,
		'YODOBASHI':true,
		'YOGA':true,
		'YOKOHAMA':true,
		'YOU':true,
		'YOUTUBE':true,
		'YT':true,
		'YUN':true,
		'ZA':true,
		'ZAPPOS':true,
		'ZARA':true,
		'ZERO':true,
		'ZIP':true,
		'ZIPPO':true,
		'ZM':true,
		'ZONE':true,
		'ZUERICH':true,
		'ZW':true,
		};
	/*
	if (ao__emailRolePat == undefined)
		var ao__emailRolePat =/^(abuse|admin|administrator|anti-spam|antispam|billing|contact|customerservice|designer|info|hostmaster|lawyer|mail-daemon|mail-deamon|marketing|no-reply|noreplies|noreply|nospam|postmaster|returns|root|sales|spam|support)$/
	*/

	//	The following pattern is used to check if the entered email address
 	//	fits the user@domain format.  It also is used to separate the username
  	//	from the domain.
	var emailPat=/^(.+)@(.+)$/i
	
	//	The following string represents the pattern for matching all special
	//	characters.  We don't want to allow special characters in the address. 
	//	This includes ( ) < > @ , ; : \ " . [ ] */ and non-english characters
	var specialChars="\\(\\)<>@,;:¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ\\\\\\\"\\.\\[\\]"

	//	The following string represents the range of characters allowed in a 
	//	username or domainname.  It really states which chars aren't allowed. */
	var validChars="\[^\\s" + specialChars + "\]"
	
	//	The following pattern applies if the "user" is a quoted string (in
	//	which case, there are no rules about which characters are allowed
	//	and which aren't; anything goes).  E.g. "jiminy cricket"@disney.com
	//	is a legal email address. */
	var quotedUser="(\"[^\"]*\")"
	
	//	The following pattern applies for domains that are IP addresses,
	//	rather than symbolic names.  E.g. joe@[123.124.233.4] is a legal
	//	email address. NOTE: The square brackets are required. */
	var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
	
	//	The following string represents an atom (basically a series of
	//	non-special characters.) */
	var atom=validChars + '+'
	
	//	The following string represents one word in the typical username.
	//	For example, in john.doe@somewhere.com, john and doe are words.
	//	Basically, a word is either an atom or quoted string. */
	var word="(" + atom + "|" + quotedUser + ")"
	
	// The following pattern describes the structure of the user
	var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
	
	//	The following pattern describes the structure of a normal symbolic
	//	domain, as opposed to ipDomainPat, shown above. */
	var domainPat=new RegExp(/^([a-zA-Z0-9][a-zA-Z0-9.-]*\.)[a-zA-Z]{2,}?$/)

	//	Finally, let's start trying to figure out if the supplied address is
	//	valid.

	//	Begin with the coarse pattern to simply break up user@domain into
	//	different pieces that are easy to analyze.
	var matchArray=emailStr.match(emailPat)
	if (matchArray==null) 
		{
	  	//	Too many/few @'s or something; basically, this address doesn't
	    //	even fit the general mould of a valid email address.
		return false
		}
	var user=matchArray[1]

	var domain=matchArray[2]

	//	See if "user" is valid 
	if (user.match(userPat)==null) 
		{
	    //	User is not valid
	    return false
		}

	/*
	if (user.match( ao__emailRolePat )!= null)
		{
		return false;
		}
	*/

	//	if the email address is at an IP address (as opposed to a symbolic
	//	host name) make sure the IP address is valid.
	var IPArray=domain.match(ipDomainPat)
	if (IPArray!=null) 
		{
	    // this is an IP address
		for (var i=1;i<=4;i++) 
			{
		    if (IPArray[i]>255) 
		    	{
				return false
			    }
	 		}
	    return true
		}

	//	Domain is symbolic name
	
	//	Special handling of localhost situation
	if (domain == "localhost")
		return true;
	
	var domainArray=domain.match(domainPat)
	if (domainArray==null) 
		{
	    return false
		}

	//	Now we need to break up the domain to get a count of how many atoms
	//	it consists of.

	var atomPat=new RegExp(atom,"g")
	var domArr=domain.match(atomPat)
	var len=domArr.length
	return len >= 2 && (domArr[len-1].toUpperCase() in tlds);
	};

//	Field Validators

validateNonBlank = function (value)
	{
	return value.length > 0;
	};
	
validateNumber = function (value)
	{
	return ! isNaN (value);
	};

implicitValidateLength = function ()
	{
	// args: value len arg2 id
	var args = Array.prototype.slice.call(arguments); 
	var value = args[0];
	var len = args[1];

	if (typeof(value) == undefined) return true;
	if (typeof(len) == undefined) return true;

	return value.length < len+1;
	}

implicitValidateNumberRange = function ()
	{
	// args: value lowrange highrange id
	var args = Array.prototype.slice.call(arguments); 
	var value = args[0];
	var lowrange = args[1];
	var highrange = args[2];

	if (isNaN (value)) return false;

	if ((lowrange < value) && (value < hirange))
		return true;

	return false;
	};
	
implicitValidateConfirm = function ()
	{
	// args: value arg1 arg2 id
	var args = Array.prototype.slice.call(arguments); 

	var primaryInput = args[3];
	var secondaryInput = args[3]+'-confirm';

	return document.getElementById(primaryInput).value == document.getElementById(secondaryInput).value;
	};
	
implicitValidateDate = function ()
	{
	// args: value arg1 arg2 id
	var args = Array.prototype.slice.call(arguments); 

	var dateHidden = args[3];

	var dateOutputPattern = document.getElementById(dateHidden+'_pattern').value;

	var MM, dd, day, yy, yyyy;
	var MMField = document.getElementById(dateHidden+'_MM');		if (MMField && MMField.value)		MM = MMField.value;
	var ddField = document.getElementById(dateHidden+'_dd');		if (ddField && ddField.value)		dd = ddField.value;
	var dayField = document.getElementById(dateHidden+'_Day');		if (dayField && dayField.value)		dd = dayField.value;
	var yyField = document.getElementById(dateHidden+'_yy');		if (yyField && yyField.value)		yy = yyField.value;
	var yyyyField = document.getElementById(dateHidden+'_yyyy');	if (yyyyField && yyyyField.value)	yyyy = yyyyField.value;

	if (yyyy != null && yy == null) yy = yyyy % 100;

	if (yy != null && yyyy == null) yyyy = 2000+parseInt(yy);	// remember y2k?

	var daysInMonth = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	if (yyyy != null && MM == 2)
		{
		var febDays;
		if ((yyyy % 400) == 0)
			febDays = 29;
		else if ((yyyy % 100) == 0)
			febDays = 28;
		else if ((yyyy % 4) == 0)
			febDays = 29;
		else
			febDays = 28;
		if (dd > febDays)
			return false;
		}
	else if (dd > daysInMonth[MM-1])
		return false;

	var MMM = MM != null ? [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ][MM-1] : null;

	var MMMMM = MM != null ? [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ][MM-1] : null;

	var E = null;

	if (yyyy != null && MM != null && dd != null) E = new Date(yyyy, MM-1, dd).getDay();

	var EEE = E != null ? [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ][E] : null;

	var EEEEEEE = E != null ? [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ][E] : null;

	var result = '';

	switch (dateOutputPattern)
	{
	case "MM/dd/yyyy":				if (MM && dd)    result = MM+'/'+dd+(yyyy != null ? '/'+yyyy : '');												break;
	case "dd/MM/yyyy":				if (dd && MM)    result = dd+'/'+MM+(yyyy != null ? '/'+yyyy : '');												break;
	case "MM/dd/yy":				if (MM && dd)    result = MM+'/'+dd+(yy != null ? '/'+yy : '');													break;
	case "dd/MM/yy":				if (dd && MM)    result = dd+'/'+MM+(yy != null ? '/'+yy : '');													break;
	case "yyyy/MM/dd":				if (MM && dd)    result = (yyyy != null ? yyyy+'/' : '')+MM+'/'+dd;												break;
	case "MM-dd-yyyy":				if (MM && dd)    result = MM+'-'+dd+(yyyy != null ? '-'+yyyy : '');												break;
	case "dd-MM-yyyy":				if (dd && MM)    result = dd+'-'+MM+(yyyy != null ? '-'+yyyy : '');												break;
	case "MM-dd-yy":				if (MM && dd)    result = MM+'-'+dd+(yy != null ? '-'+yy : '');													break;
	case "dd-MM-yy":				if (dd && MM)    result = dd+'-'+MM+(yy != null ? '-'+yy : '');													break;
	case "yyyy-MM-dd":				if (MM && dd)    result = (yyyy != null ? yyyy+'-' : '')+MM+'-'+dd;												break;
	case "dd MMM yyyy":				if (dd && MMM)   result = dd+' '+MMM+(yyyy != null ? ' '+yyyy : '');											break;
	case "MMM dd yyyy":				if (MMM && dd)   result = MMM+' '+dd+(yyyy != null ? ' '+yyyy : '');											break;
	case "dd MMMMM yyyy":			if (dd && MMMMM) result = dd+' '+MMMMM+(yyyy != null ? ' '+yyyy : '');											break;
	case "EEE, dd MMM yyyy":		if (dd && MMM)   result = (EEE != null ? EEE+', ' : '')+dd+' '+MMM+(yyyy != null ? ' '+yyyy : '');				break;
	case "EEEEEEE, dd MMMMM yyyy":	if (dd && MMMMM) result = (EEEEEEE != null ? EEEEEEE+', ' : '')+dd+' '+MMMMM+(yyyy != null ? ' '+yyyy : '');	break;
	}

	document.getElementById(dateHidden).value = result;

	return true;
	};

deconstructDate = function(dateHidden)
	{
	var dateValue = document.getElementById(dateHidden).value;

	var dateOutputPattern = document.getElementById(dateHidden+'_pattern').value;

	var MM, MMM, MMMMM, dd, yy, yyyy;

	var MMMs = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

	var MMMMMs = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

	switch (dateOutputPattern)
	{
	case "MM-dd-yyyy":
	case "MM/dd/yyyy":		
									MM = dateValue.substring(0, 2);
									dd = dateValue.substring(3, 5);
									yyyy = dateValue.substring(6, 10);
									yy = yyyy % 100;
									break;
	case "MM/dd/yy":
	case "MM-dd-yy":
									MM = dateValue.substring(0, 2);
									dd = dateValue.substring(3, 5);
									yy = dateValue.substring(6, 8);
									yyyy = 2000 + yy;	// y2k
									break;
	case "dd/MM/yy":
	case "dd-MM-yy":
									dd = dateValue.substring(0, 2);
									MM = dateValue.substring(3, 5);
									yy = dateValue.substring(6, 8);
									yyyy = 2000 + yy;	// y2k
									break;
	case "yyyy/MM/dd":
	case "yyyy-MM-dd":
									yyyy = dateValue.substring(0, 4);
									MM = dateValue.substring(5, 7);
									dd = dateValue.substring(8, 10);
									yy = yyyy % 100;
									break;
	case "dd/MM/yyyy":
	case "dd-MM-yyyy":
									dd = dateValue.substring(0, 2);
									MM = dateValue.substring(3, 5);
									yyyy = dateValue.substring(6, 10);
									yy = yyyy % 100;
									break;
	case "dd MMM yyyy":
									dd = dateValue.substring(0, 2);
									MMM = dateValue.substring(3, 6);
									MM = 1+MMM.indexOf(MMM);
									if (MM < 10) MM='0'+MM;
									yyyy = dateValue.substring(7, 11);
									yy = yyyy % 100;
									break;
	case "MMM dd yyyy":
									MMM = dateValue.substring(0, 3);
									MM = 1+MMMs.indexOf(MMM);
									if (MM < 10) MM='0'+MM;
									dd = dateValue.substring(4, 6);
									yyyy = dateValue.substring(7, 11);
									yy = yyyy % 100;
									break;
	case "dd MMMMM yyyy":
									dd = dateValue.substring(0, 2);
									MMMMM = dateValue.substring(3, dateValue.length-5);
									MM = 1+MMMMMs.indexOf(MMMMM);
									if (MM < 10) MM='0'+MM;
									yyyy = dateValue(dateValue.length-4, dateValue.length);
									yy = yyyy % 100;
									break;
	case "EEE, dd MMM yyyy":
									dd = dateValue.substring(dateValue.length-11, dateValue.length-9);
									MMM = dateValue.substring(dateValue.length-8, dateValue.length-5);
									MM = 1+MMMs.indexOf(MMM);
									if (MM < 10) MM='0'+MM;
									yyyy = dateValue.substring(dateValue.length-4, dateValue.length);
									yy = yyyy % 100;
									break;
	case "EEEEEEE, dd MMMMM yyyy":
									var ix = dateValue.indexOf(' ');
									dd = dateValue.substring(ix+1, ix+3);
									var iy = dateValue.lastIndexOf(' ');
									MMMMM = dateValue.substring(ix+3, iy);
									MM = 1+MMMMMs.indexOf(MMMMM);
									if (MM < 10) MM='0'+MM;
									yyyy = dateValue.substring(iy+1, iy+5);
									yy = yyyy % 100;
									break;
	}

	if (MM != null)
		{
		var mmE = document.getElementById(dateHidden+'_MM');
		if (mmE) mmE.value = MM;
		}

	if (dd != null)
		{
		var ddE = document.getElementById(dateHidden+'_dd');
		if (ddE) ddE.value = dd;
		var dayE = document.getElementById(dateHidden+'_Day');
		if (dayE) dayE.value = dd;
		}

	var yyE = document.getElementById(dateHidden+'_yy');
	if (yyE && yy != null) yyE.value = yy;

	var yyyyE = document.getElementById(dateHidden+'_yyyy');
	if (yyyyE && yyyy != null) yyyyE.value = yyyy;
	};
	
validateEmail = function (value)
	{
	value = value.replace(/^\s+/, '').replace(/\s+$/, '');
	// Return true if empty or is valid email
	if( value.length > 0 )
		return isEmailAddress(value);
	return true;
	};

validateNoRoleNoPublicEmail = function (value)
	{
	return validateNoPublicEmail(value) && validateNoRoleEmail(value);
	}

var publicEmailPatterns = [
	/@163\.com/i, /@aol\.com/i, /@bellsouth\.net/i, /@btconnect\.com/i, /@charter\.com/i, /@comcast\.net/i,
	/@cox\.net/i, /@earthlink\.net/i, /@email\.com/i, /@gmail\.co/i, /@gmail\.com/i, /@hotmail\.co\.../i, /@hotmail\.com/i,
	/@juno\.com/i, /@mail\.com/i, /@mail\.ru/i, /@mindspring\.com/i, /@msn\.com/i, /@orange\.fr/i, /@rogers\.com/i,
	/@sbcglobal\.net/i, /@shaw\.ca/i, /@sympatico\.ca/i, /@telus\.net/i, /@verizon\.net/i, /@yahoo\.ca/i, /@yahoo\.co\.../i,
	/@yahoo\.com/i, /@ymail\.com/i, /@virgin\.net/i, /@virginmedia\.com/i, /@ntlworld\.com/i, /@blueyonder\.co\.../i,
	/@icloud\.com/i, /@me\.com/i, /@mac\.com/i];

validateNoPublicEmail = function (value)
	{
	value = value.replace(/^\s+/, '').replace(/\s+$/, '');
	// Return true if empty or is valid email
	if (value.length <= 0)
		return true;

	for (var i = 0; i < publicEmailPatterns.length; ++i)
		if (value.match(publicEmailPatterns[i]))
			return false;

	return isEmailAddress(value);
	};

var roleEmailPatterns = [
	/^abuse@/i, /^admin@/i, /^administrator@/i, /^anti-spam@/i, /^antispam@/i, /^billing@/i, /^contact@/i, /^customerservice@/i,
	/^designer@/i, /^info@/i, /^it@/i, /^hostmaster@/i, /^lawyer@/i, /^mail-daemon@/i, /^mail-deamon@/i, /^marketing@/i,
	/^no-reply@/i, /^noreplies@/i, /^noreply@/i, /^nospam@/i, /^postmaster@/i, /^returns@/i, /^root@/i, /^sales@/i,
	/^spam@/i, /^support@/i ];


validateNoRoleEmail = function (value)
	{
	value = value.replace(/^\s+/, '').replace(/\s+$/, '');
	// Return true if empty or is valid email
	if (value.length <= 0)
		return true;

	for (var i = 0; i < roleEmailPatterns.length; ++i)
		if (value.match(roleEmailPatterns[i]))
			return false;

	return isEmailAddress(value);
	};

function validatePhoneNumberLength(value)
	{
	var digits = value.replace(/[^\d.]/g, "");
	var digitsLength = digits.length;
	return  !(digitsLength < 7 || digitsLength > 15);
	}

validateIntlPhone = function (value)
	{
	if (!value || value.length == 0)
		return true;

	if (!validatePhoneNumberLength(value))
		return false;

	//http://blog.stevenlevithan.com/archives/validate-phone-number
	//var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

	// AO-8389
	//http://www.karlhorky.com/2010/07/jquery-international-phone-number.html
	var regex = /^((\+)?[1-9]{1,2})?([-\s\.])?(\(\d\)[-\s\.]?)?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}(\s*(ext|x)\s*\.?:?\s*([0-9]+))?$/;
	return value.match(regex);
	}
	
validateAnyPhone = function (value)
	{
	if (!value || value.length == 0) 
		return true;

	return validateUSPhone(value) || validateIntlPhone(value);
	}
	
validateUSPhone = function (value)
	{
	if (!value || value.length == 0) 
		return true;

	if (!validatePhoneNumberLength(value))
		return false;

	// http://stackoverflow.com/questions/123559/a-comprehensive-regex-for-phone-number-validation
	var regPhone = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
	return  value.match(regPhone);
	};
	
//	Field validator registry
//	these are exposed to the end user in the choice dropdown
var	validators = [ 
   	[ "Should be a number",											"NUMBER",		validateNumber,					"Please enter a number." ],
   	[ "Should be a phone number",									"ANYPHONE",		validateAnyPhone,				"Please enter a valid phone number." ],   	
   	[ "Should be an email address",									"EMAIL",		validateEmail,					"Please enter a valid email address." ],
   	[ "Should be a non-role-based email address",					"NREMAIL",		validateNoRoleEmail,			"Please enter a valid, non-role-based email address." ],
   	[ "Should be a non-consumer email address",						"NPEMAIL",		validateNoPublicEmail,			"Please enter a valid, non-consumer email address." ],
   	[ "Should be a non-consumer, and non-role-based email address",	"NPREMAIL",		validateNoRoleNoPublicEmail,	"Please enter a valid, non-consumer, non-role-based email address." ],
   	[ "Should be a US phone number",								"USPHONE",		validateUSPhone,				"Please enter a valid US phone number." ],
   	[ "Should be an international phone number",					"INTLPHONE",	validateIntlPhone,				"Please enter a valid international phone number." ]
 	];

//	these can be used, but are not presented in the dropdown

var implicitValidators = [
	[ "Between range",														"RANGE",		implicitValidateNumberRange	],
	[ "Don't exceed maximum length",										"LENGTH",		implicitValidateLength		],
	[ "Please verify that the highlighted field matches the field below it","CONFIRM",		implicitValidateConfirm		],
	[ "Should be a valid date",												"DATE",			implicitValidateDate		]
	];
	
//	Password Field Checker

doubleCheck = function (idPrimaryField, idCheckerField, idLabel)
	{
	
	var primary = document.getElementById(idPrimaryField);
	var checker = document.getElementById(idCheckerField);
	
	var label   = document.getElementById(idLabel);
	
	if (!primary) return;
	if (!checker) return;
	
	if (primary.value != checker.value)
		label.className = 'formFieldLabelBad';
	else
		label.className = 'formFieldLabelGood';
	};
	
	
//	Text Field Checker

singleCheck = function (idField, validationType, idLabel)
	{
	var value = document.getElementById(idField).value;
	var label = document.getElementById(idLabel);

	if (!value) return;
	
	for (var i = 0; i < validators.length; i++)
		{
		var validationValue 	= validators[i][1];
		var validationFunction	= validators[i][2];

		if (validationValue == validationType)
			{
			if (validationFunction (value))
				label.className = 'formFieldLabelGood';
			else
				label.className = 'formFieldLabelBad';
			break;
			}
		}
	};
	


