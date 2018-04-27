<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.png" rel="shortcut icon">
		<link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">
		<!-- Typekit fonts CDN -->
		<link rel="stylesheet" href="https://use.typekit.net/nad7rfo.css">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<meta name="theme-color" content="#e9df00"/>
		<!-- Google Search Console tag -->
		<meta name="google-site-verification" content="NgJBNXlQ0FPcUEQy1PB2DBypMh5HYeegXG-b46rr1fY" />

		<!-- Attend Form Act-On -->
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link rel="stylesheet" type="text/css" href="/wp-content/themes/matter/form/form.css">
		<link rel="stylesheet" type="text/css" href="/wp-content/themes/matter/form/formNegCap.css">
		<script type="text/javascript" src="/wp-content/themes/matter/form/form.js">
		</script>
		<script type="text/javascript">
			function formElementSerializers() { function input(element) { switch (element.type.toLowerCase()) { case 'checkbox': case 'radio': return inputSelector(element); default: return valueSelector(element); } };
			function inputSelector(element) { return element.checked ? element.value : null; };
			function valueSelector(element) { return element.value; };
			function select(element) { return (element.type === 'select-one' ? selectOne : selectMany)(element); };
			function selectOne(element) { var index = element.selectedIndex; return index < 0 ? null : optionValue(element.options[index]); };
			function selectMany(element) { var length = element.length; if (!length) return null; var values = []; for (var i = 0; i < length; i++) { var opt = element.options[i]; if (opt.selected) values.push(optionValue(opt)); } return values; };
			function optionValue(opt) { if (document.documentElement.hasAttribute) return opt.hasAttribute('value') ? opt.value : opt.text; var element = document.getElementById(opt); if (element && element.getAttributeNode('value')) return opt.value; else return opt.text; };
			return { input: input, inputSelector: inputSelector, textarea: valueSelector, select: select, selectOne: selectOne, selectMany: selectMany, optionValue: optionValue, button: valueSelector };
			};
			var requiredFields = new Array(); var requiredFieldGroups = new Array(); addRequiredField = function (id) { requiredFields.push (id); };
			addRequiredFieldGroup = function (id, count) { requiredFieldGroups.push ([id, count]); };
			missing = function (fieldName) { var f = document.getElementById(fieldName); var v = formElementSerializers()[f.tagName.toLowerCase()](f); if (v) { v = v.replace (/^\s*(.*)/, "$1"); v = v.replace (/(.*?)\s*$/, "$1"); } if (!v) { f.style.backgroundColor = '#bd4600'; return 1; } else { f.style.backgroundColor = ''; return 0; } };
			missingGroup = function (fieldName, count) { var result = 1; var color = '#FFFFCC'; for (var i = 0; i < count; i++) { if (document.getElementById(fieldName+'-'+i).checked) { color = ''; result = 0; break; } } for (var i = 0; i < count; i++) document.getElementById(fieldName+'-'+i).parentNode.style.backgroundColor = color; return result; };
			var validatedFields = new Array(); addFieldToValidate = function (id, validationType, arg1, arg2) { validatedFields.push ([ id, validationType, arg1, arg2 ]); };
			validateField = function (id, fieldValidationValue, arg1, arg2) { var field = document.getElementById(id); var name = field.name; var value = formElementSerializers()[field.tagName.toLowerCase()](field); for (var i = 0; i < validators.length; i++) { var validationDisplay = validators[i][3]; var validationValue = validators[i][1]; var validationFunction	= validators[i][2]; if (validationValue === fieldValidationValue) { if (!validationFunction (value,arg1,arg2,id)) { field.style.backgroundColor = '#FFFFCC'; alert (validationDisplay); return false; } else { field.style.backgroundColor = ''; } break; } } for (var i = 0; i < implicitValidators.length; i++) { var validationDisplay = implicitValidators[i][0]; var validationValue = implicitValidators[i][1]; var validationFunction	= implicitValidators[i][2]; if (validationValue === fieldValidationValue) { if (!validationFunction (value,arg1,arg2,id)) {	field.style.backgroundColor = '#FFFFCC'; alert (validationDisplay); return false; } else { field.style.backgroundColor = ''; } break; } } return true; };
			var r = ''; formElementById = function(form, id) { for (var i = 0; i < form.length; ++i) if (form[i].id === id) return form[i]; return null; };
			doSubmit = function(form) { try { if (typeof(customSubmitProcessing) === "function") customSubmitProcessing(); } catch (err) { } var ao_jstzo = formElementById(form, "ao_jstzo"); if (ao_jstzo) ao_jstzo.value = new Date().getTimezoneOffset(); var submitButton = document.getElementById(form.id+'_ao_submit_button'); submitButton.style.visibility = 'hidden'; var missingCount = 0; for (var i = 0; i < requiredFields.length; i++) if (requiredFields[i].indexOf(form.id+'_') === 0) missingCount += missing (requiredFields[i]); for (var i = 0; i < requiredFieldGroups.length; i++) if (requiredFieldGroups[i][0].indexOf(form.id+'_') === 0) missingCount += missingGroup (requiredFieldGroups[i][0], requiredFieldGroups[i][1]); if (missingCount >
			0) { alert ('Please fill all required fields. '); submitButton.style.visibility = 'visible'; return; } for (var i = 0; i < validatedFields.length; i++) { var ff = validatedFields[i]; if (ff[0].indexOf(form.id+'_') === 0 && !validateField (ff[0], ff[1], ff[2], ff[3])) { document.getElementById(ff[0]).focus(); submitButton.style.visibility = 'visible'; return; } } if (formElementById(form, 'ao_p').value === '1') { submitButton.style.visibility = 'visible'; return; } formElementById(form, 'ao_bot').value = 'nope'; form.submit(); };
		</script>

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>
		<!-- Global Site Tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-115670438-1"> 
		</script> 
		<script>
	         window.dataLayer = window.dataLayer || [];
	         function gtag(){dataLayer.push(arguments)};
	         gtag('js', new Date());
	       
	         gtag('config', 'UA-115670438-1');
		</script>
	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper">
			<div class="signup">
				<a class="signup__close" href="javascript:void(0)" onclick="ga('send', 'event', 'Close popup', 'button', 'Newsletter popup');"><svg class="signup__close__xsvg" viewBox="240 240 20 20"><g class="close-stroke"><path class="close-path" d="M255.6 255.6l-11.2-11.2" vector-effect="non-scaling-stroke"></path><path class="close-path-2" d="M255.6 244.4l-11.2 11.2" vector-effect="non-scaling-stroke"></path></g></svg><div class="close__button__label">close dialog</div></a>
				<div class="signup__content">
					<a href="http://marketing.beyondluxury.com/acton/form/17611/00cf:d-0001/0/-/-/-/-/index.htm" target="_blank" onclick="ga('send', 'event', 'Newsletter Signup', 'button', 'Newsletter popup');"><h4>SIGN UP HERE FOR THE MATTER NEWSLETTER</h4></a>
				</div>
			</div>

			<!-- header -->
			<header class="header clear" role="banner">

					<!-- logo -->
					<div class="header__logo">
						<a class="matter" href="<?php echo home_url(); ?>">
							<div class="matter__text">MATTER</div>
						</a>
					</div>
					<!-- /logo -->
					<!-- Dates -->
					<div class="header__dates"><h4>9 - 10 SEPTEMBER 2018</h4></div>
					<!-- /logo -->

					<!-- nav -->
					<nav class="header__nav" role="navigation">
						<?php html5blank_nav(); ?>
					</nav>
					<!-- /nav -->
					<!-- hamburger -->
					<div class="header__hamburger">
						<div class="header__hamburger__lines">
							<span></span>
							<span></span>
						</div>
						<div class="header__hamburger__thex">
							<span></span>
							<span></span>
						</div>
					</div>
					<!--/hamgburger -->
			</header>
			<!-- /header -->
