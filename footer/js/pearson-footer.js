(function(w, doc) {
  'use strict';

  const template = doc.createElement('template'),
        noBrandingTemp = doc.createElement('template'),
        withBrandingTemp = doc.createElement('template');

  template.innerHTML = `
	<style>
		html{font-size:.875rem}body{color:#252525;font-family:Open Sans,Calibri,Tahoma,sans-serif}h1,h2,h3,h4,h5,h6{margin-bottom:0;margin-top:0}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:20px}h1+h2{margin-top:40px}h2+h3,h3+h4,h4+h5,h5+h6{margin-top:6px}header{margin-bottom:20px}header h1+.subtitle{margin-top:34px}aside h1{font-size:1.25rem}aside h2{font-size:1.1rem}aside h3{font-size:1rem}aside h4,aside h5,aside h6{font-size:.8rem}table{border-collapse:collapse;margin-bottom:35px;max-width:100%;width:100%}table td,table th{line-height:1.42857143;padding:8px;text-align:left;vertical-align:top}table thead th{border-top:0;vertical-align:bottom}a{color:#047a9c;text-decoration:underline}a.active,a:active,a:focus,a:hover{color:#005a70;text-decoration:none}a:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}abbr,abbr[title]{text-decoration:none}ins:after,ins:before{content:"+"}mark{background:#ffb81c}small{font-size:.85714rem;line-height:1.14286rem}sub,sup{font-size:90%}sub{top:.2rem}sup{top:-.2rem}pre{max-width:100%;overflow-x:auto}code,kbd,pre{font-family:Monaco,Lucida Console,monospace}:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}@font-face{font-family:Open Sans;font-style:normal;font-weight:100;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff) format("woff")}@font-face{font-family:Open Sans;font-style:italic;font-weight:100;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff) format("woff")}@font-face{font-family:Open Sans;font-style:normal;font-weight:400;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff) format("woff")}@font-face{font-family:Open Sans;font-style:italic;font-weight:400;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff) format("woff")}@font-face{font-family:Open Sans;font-style:normal;font-weight:600;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff) format("woff")}@font-face{font-family:Open Sans;font-style:italic;font-weight:600;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff) format("woff")}.pe-base-fontsize{font-size:.875rem}.pe-fontstack{font-family:Open Sans,Calibri,Tahoma,sans-serif}.pe-copy{color:#252525;font-size:1rem;line-height:1.57143rem}.pe-copy--secondary,.pe-label--secondary{color:#6a7070}.pe-copy--small{color:#252525;font-size:.85714rem;line-height:1.42857rem}.pe-copy--large,.pe-heading-level6,h6,header h5+.subtitle{color:#252525;font-size:1.14286rem;line-height:1.71429rem}.pe-paragraph,p{color:#252525;font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0}.pe-paragraph--last{color:#252525;margin-bottom:0}.pe-lead{font-size:1.42857rem;line-height:2rem}.pe-lead,.pe-page-title{color:#252525;font-weight:lighter}.pe-page-title{font-size:2.71429rem;line-height:3.71429rem}.pe-heading-level1,.pe-page-title--small,h1{color:#252525;font-size:2rem;font-weight:lighter;line-height:2.71429rem}.pe-heading-level3,.pe-heading-level4,.pe-title,h3,h4,header h2+.subtitle,header h3+.subtitle{color:#252525;font-size:1.42857rem;font-weight:400;line-height:1.85714rem}.pe-heading-level5,.pe-title--small,h5,header h4+.subtitle{color:#252525;font-size:1.28571rem;font-weight:400;line-height:1.57143rem}.pe-heading-level2,.pe-title--large,h2,header h1+.subtitle{color:#252525;font-size:1.71429rem;font-weight:400;line-height:2rem}.pe-page-title--secondary,.pe-title--secondary{color:#6a7070}.pe-label{font-size:1rem;line-height:1.28571rem}.pe-label.pe-label--inverse{color:#fff}.pe-label--secondary.pe-label--inverse{color:#f5f5f5}.pe-label--small{font-size:.85714rem;line-height:1.14286rem}.pe-label--large{font-size:1.14286rem;line-height:1.42857rem}.pe-bold,.pe-label--bold{font-weight:600}.pe-list{margin:12px 0;padding-left:1.85714rem}.pe-list li{font-size:1rem;line-height:1.57143rem;margin-bottom:.42857rem}.pe-list li>ol,.pe-list li>ul{margin-top:.42857rem}.pe-list.pe-styled-lists--ordered{list-style-type:decimal}.pe-list.pe-styled-lists--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists--unordered{list-style-type:disc}.pe-list.pe-styled-lists--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists--unordered ul ul{list-style-type:square}.pe-list.pe-styled-lists-heading--ordered{list-style-type:decimal;margin-top:0}.pe-list.pe-styled-lists-heading--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists-heading--unordered{list-style-type:disc;margin-top:0}.pe-list.pe-styled-lists-heading--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--unordered ul ul{list-style-type:square}.pe-list--unstyled{list-style:none;padding-left:0}.pe-list--unstyled ul{padding-left:1.85714rem}.pe-heading-level1,.pe-heading-level2,h1,h2,header h1+.subtitle{margin-bottom:6px}.pe-heading-level3,h3,header h2+.subtitle{font-weight:700;margin-bottom:6px}.pe-heading-level4,.pe-heading-level5,.pe-heading-level6,h4,h5,h6,header h3+.subtitle,header h4+.subtitle,header h5+.subtitle{margin-bottom:6px}*+[class^=pe-heading-level]{margin-top:20px}.pe-code{background:#005a70;color:#f5f5f5;font-size:1rem;line-height:1.42857rem;padding:30px 50px}.pe-code,.pe-code-inline,.pe-kbd{font-family:Monaco,Lucida Console,monospace}.pe-code-inline,.pe-kbd{background:#e9e9e9;padding:0 4px}
	</style>
  <footer class="pe-footer pe-label">
  </footer>
  `;

  noBrandingTemp.innerHTML = `
    <ul></ul>
    <p class="pe-label">Copyright<span>&copy;</span>2018 Pearson Education Inc. All Rights Reserved.</p>
  `;

  withBrandingTemp.innerHTML = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="pe-icon--logo-full" style="display:none" id="pe-icons-sprite">
        <symbol id="pearson-logo" viewBox="0 0 123 37">
            <g>
                <path d="M72.6813131,24.2490047 C72.3908458,24.6518551 71.4428505,25.8547009 70.2635187,25.8547009 C68.668715,25.8547009 68.333986,24.7351916 68.333986,23.7963598 C68.333986,22.252215 69.5160841,21.5381495 72.6813131,20.7564813 L72.6813131,24.2490047 Z M76.6218131,26.1403271 C76.5758224,26.0205093 76.4513364,25.9523879 76.3289252,25.9812617 L76.2901963,25.9911168 C75.9265935,26.0699579 75.6468458,26.0478271 75.4507804,25.9155607 C75.1729346,25.7271028 75.0375561,25.3028131 75.0375561,24.618486 L75.0375561,18.4284206 C75.0375561,16.0106262 73.5957664,14.784785 70.7517804,14.784785 C68.204486,14.784785 66.2090794,15.9903972 66.2090794,17.529528 C66.2090794,18.3208785 66.6911168,18.8928224 67.4032804,18.9787523 C67.8685467,19.034771 68.3122009,18.8241822 68.6346542,18.4840935 C69.2608879,17.8231075 69.1796262,17.0374626 68.4204346,16.1935514 C68.8694486,15.7236168 69.6647757,15.4455981 70.5719673,15.4455981 C72.0504112,15.4455981 72.6813131,16.3223598 72.6813131,18.377243 L72.6813131,19.9414439 C72.3346542,20.0486402 72.0102991,20.1501308 71.4170888,20.2893131 C70.2201215,20.570271 68.5779439,20.9442477 67.3393084,21.6287477 C66.3167944,22.1891075 65.7982757,23.0739953 65.7982757,24.2590327 C65.7982757,25.5486729 66.6447804,27.0547804 69.0307617,27.0547804 C70.3667383,27.0547804 71.5640514,26.4207664 72.7926589,25.0616215 C72.898472,26.4743645 73.4339346,27.0036028 74.7327383,27.0036028 C75.3570701,27.0036028 75.856743,26.8580234 76.4506449,26.5706682 C76.6116121,26.4928645 76.6882056,26.3061355 76.6218131,26.1403271 L76.6218131,26.1403271 Z"></path>
                <path d="M103.127645,15.368486 C101.666836,15.368486 99.9904252,15.9966215 99.9904252,20.8942804 C99.9904252,24.6297243 101.092126,26.4453178 103.358636,26.4453178 C105.527977,26.4453178 106.495336,24.7332897 106.495336,20.8942804 C106.495336,17.1757804 105.393808,15.368486 103.127645,15.368486 Z M103.255589,27.1064766 C99.8752757,27.1064766 97.3260794,24.4578645 97.3260794,20.9454579 C97.3260794,17.5058411 99.9862757,14.7076729 103.255589,14.7076729 C106.566397,14.7076729 109.159855,17.4022757 109.159855,20.842757 C109.159855,24.7115047 106.095252,27.1064766 103.255589,27.1064766 L103.255589,27.1064766 Z"></path>
                <path d="M44.8028505,24.618486 L44.8028505,20.1404486 L46.5268084,20.1404486 C49.0993458,20.1404486 51.0563692,19.5959953 52.3439346,18.5219579 C53.6894206,17.3993364 53.9717617,15.9769112 53.9717617,14.9815421 C53.9717617,10.8869907 50.0210607,10.0276916 46.7066215,10.0276916 L46.7201075,10.0273458 L39.9975187,10.0273458 C39.8453692,10.0273458 39.7215748,10.1511402 39.7215748,10.3032897 L39.7215748,10.3216168 L39.7214019,10.3157383 C39.7214019,10.4563037 39.8071589,10.5814813 39.9390794,10.6298925 C40.5378224,10.8499907 42.1642664,10.5401589 42.1642664,12.2845187 L42.1644393,24.6160654 C42.1644393,25.5130561 41.7666028,26.1458598 39.948243,26.3175467 C39.8042196,26.3313785 39.6952944,26.4494673 39.6952944,26.5921075 L39.6952944,26.6344673 C39.6952944,26.7866168 39.8190888,26.9104112 39.9712383,26.9104112 L47.1533879,26.9104112 C47.3053645,26.9104112 47.4293318,26.7866168 47.4293318,26.6344673 L47.4293318,26.5967757 C47.4293318,26.4541355 47.316257,26.3334533 47.1722336,26.322215 C45.1968832,26.1641869 44.800257,25.5521308 44.800257,24.6160654 L44.800257,20.148229 M50.9993131,14.9300187 C50.9993131,17.7790187 50.2971776,19.3485794 46.7066215,19.3485794 L44.8028505,19.3485794 L44.8028505,10.740028 L46.7839065,10.740028 C50.4984299,10.740028 50.9993131,12.8580187 50.9993131,14.9300187"></path>
                <path d="M56.3918037,19.3573972 C56.653743,16.7905654 57.6555093,15.383528 59.2287009,15.383528 C60.0162477,15.383528 60.5997757,15.6013785 61.0124813,16.0498738 C61.5795841,16.6659065 61.8192196,17.7785 61.7249907,19.3573972 L56.3918037,19.3573972 Z M59.4079953,14.7016215 C56.2816682,14.7016215 53.7383505,17.5322944 53.7383505,21.0116776 C53.7383505,24.5339393 56.1229486,27.0905701 59.4079953,27.0905701 C62.1686449,27.0905701 63.5117103,25.4413037 64.2817944,24.2005935 C64.3576963,24.0787009 64.3245,23.9168692 64.2064112,23.8323224 L64.1701028,23.8065607 C64.0509766,23.7216682 63.8851682,23.7453551 63.7933598,23.8611963 C62.7781075,25.1337196 61.8899346,25.8704346 60.3556449,25.8704346 C58.4150467,25.8704346 56.3418364,24.5334206 56.3418364,20.7810327 L56.3418364,20.7531963 C56.3385514,20.5873879 56.342528,20.3602009 56.3485794,20.148229 L64.2880187,20.148229 C64.3098037,20.148229 64.3276121,20.131285 64.3291682,20.1098458 L64.3336636,20.0460467 C64.4457009,18.506743 64.0103458,17.1246028 63.1079953,16.1536121 C62.2248364,15.203715 60.9452243,14.7016215 59.4079953,14.7016215 L59.4079953,14.7016215 Z"></path>
                <path d="M92.3160374,19.4962336 C92.3153458,19.4958879 92.3144813,19.4958879 92.3136168,19.495715 C90.1423738,18.886771 89.2963879,18.2702196 89.2963879,17.2971542 C89.2963879,16.1881916 90.1766075,15.383528 91.3891355,15.383528 C92.8157103,15.383528 93.4265561,16.0652617 94.9323178,18.5828178 L94.9523738,18.6163598 C94.9596355,18.6289813 94.9732944,18.6369346 94.9878178,18.6369346 L95.1944299,18.6369346 C95.3464065,18.6369346 95.4703738,18.5129673 95.4703738,18.3609907 L95.4703738,14.7431168 C95.4703738,14.7201215 95.4517009,14.7016215 95.4288785,14.7016215 L95.1563925,14.7016215 C95.0734019,14.7016215 94.9955981,14.7384486 94.9432103,14.8025935 L94.4625561,15.3875047 C93.8556869,15.0529486 92.8677523,14.7016215 91.8761869,14.7016215 C89.3826636,14.7016215 87.6408972,16.2428271 87.6408972,18.4496869 C87.6408972,20.5208224 89.0142196,21.2971308 91.3856776,21.9375421 C93.6898785,22.568271 94.506472,23.2244159 94.506472,24.4440327 C94.506472,25.799028 93.192972,26.4086636 92.2603645,26.4086636 C90.5256869,26.4086636 89.7920841,25.763757 88.1296776,22.776785 L88.1099673,22.7411682 C88.1027056,22.728028 88.0888738,22.719729 88.0738318,22.719729 L87.8658364,22.719729 C87.7136869,22.719729 87.5898925,22.8435234 87.5898925,22.9956729 L87.5898925,27.0490748 C87.5898925,27.0718972 87.6083925,27.0905701 87.631215,27.0905701 L87.9133832,27.0905701 C87.9861729,27.0905701 88.0572336,27.0608318 88.1085841,27.0098271 L88.8686402,26.2494252 C89.7583692,26.8016589 91.0886402,27.0905701 91.9529533,27.0905701 C93.250028,27.0905701 94.3164579,26.6797664 95.0370935,25.9022477 C95.6795794,25.2094486 96.0335,24.2275654 96.0335,23.1374486 C96.0335,21.249757 95.0258551,20.2626869 92.3160374,19.4962336"></path>
                <path d="M79.1775794,25.4551355 C79.1775794,26.0801589 79.0186869,26.2846963 78.0241822,26.3474579 C77.8798131,26.3566215 77.7665654,26.4771308 77.7665654,26.6223645 C77.7665654,26.7741682 77.890014,26.8977897 78.0419907,26.8977897 L82.9553832,26.8977897 C83.1047664,26.8977897 83.226486,26.7760701 83.226486,26.6268598 C83.226486,26.4795514 83.1116822,26.3586963 82.9650654,26.3514346 C81.8277477,26.2967991 81.5334766,26.1126636 81.5334766,25.4549626 L81.5334766,18.2503364 C82.3419439,16.9055421 82.9235701,16.2016776 83.9045888,15.9888411 C83.8570421,16.1587991 83.8259206,16.3626449 83.8259206,16.5279346 C83.8259206,17.4031402 84.4374579,18.0141589 85.3126636,18.0141589 C86.1724813,18.0141589 86.7731262,17.4031402 86.7731262,16.5279346 C86.7731262,15.6999299 86.2561636,14.7332617 84.798986,14.7332617 C83.6042664,14.7332617 82.4624533,15.4181075 81.4822991,17.0568271 L81.4822991,15.2035421 C81.4822991,15.0147383 81.3265187,14.8629346 81.137715,14.8677757 L78.0418178,14.9504206 C77.8919159,14.954743 77.7745187,15.0752523 77.7745187,15.2251542 L77.7745187,15.2652664 C77.7745187,15.4009907 77.8734159,15.5175234 78.0041262,15.5358505 C79.0361495,15.6822944 79.1784439,16.1733224 79.1777523,16.6818131 L79.1775794,25.4551355"></path>
                <path d="M113.157757,14.8596495 C113.229336,14.8596495 113.297112,14.8871402 113.348808,14.9371075 C113.402752,14.9891495 113.432664,15.0591729 113.433182,15.1338645 L113.444248,17.1890935 C113.444248,17.1890935 114.452411,14.7785607 117.725182,14.7785607 L117.753883,14.7785607 C119.793897,14.7785607 120.963893,16.0794393 120.963893,18.3471589 L120.963893,25.4432056 C120.963893,26.0685748 121.122785,26.2731121 122.116944,26.335528 C122.261486,26.3445187 122.374907,26.465028 122.374907,26.6104346 C122.374907,26.7620654 122.251285,26.8856869 122.099481,26.8856869 L117.685589,26.8856869 C117.533439,26.8856869 117.409645,26.7617196 117.409645,26.609743 C117.409645,26.4624346 117.520299,26.3420981 117.661383,26.3299953 C118.463107,26.261528 118.591224,26.0588925 118.591224,25.4432056 L118.591224,19.0390935 C118.591224,16.9245607 117.990061,16.1010514 116.447126,16.1010514 C115.404729,16.1010514 114.550617,17.0113551 114.017921,17.7748692 C114.017921,17.7748692 113.745953,18.1161682 113.450818,18.7577897 L113.483495,25.4428598 C113.483495,26.0575093 113.608154,26.259972 114.387229,26.3291308 C114.527794,26.3415794 114.638103,26.4619159 114.638103,26.6031729 C114.638103,26.7617196 114.514308,26.8856869 114.362505,26.8856869 L109.975757,26.8856869 C109.823953,26.8856869 109.700332,26.7620654 109.700332,26.6102617 C109.700332,26.465028 109.813579,26.3445187 109.957949,26.3353551 C110.952453,26.2725935 111.111346,26.0680561 111.111346,25.4432056 L111.111346,16.6835421 C111.111346,16.172285 110.96836,15.6786636 109.930977,15.531528 C109.799748,15.5128551 109.700332,15.3959766 109.700332,15.2595607 L109.700332,15.2191028 C109.700332,15.0686822 109.818593,14.9474813 109.969014,14.9431589 L113.157757,14.8596495"></path>
                <path d="M26.3899907,2.52775701 C34.1700187,6.96014953 35.9809439,16.9000093 30.5678785,26.9558832 C25.8104393,35.795771 15.4224299,39.5711542 7.68216822,35.0706402 C-0.0598224299,30.5694346 -1.57059813,18.0127757 1.75628972,10.7867103 C6.58703738,0.294271028 17.7940607,-2.37093925 26.3899907,2.52775701"  fill="#007fa3"></path>
                <path d="M16.3744019,28.7185701 C16.1375327,28.5339159 15.871271,28.4071822 15.6032804,28.3534112 C15.5119907,28.3357757 15.4182804,28.3257477 15.3257804,28.3257477 C14.8197103,28.3257477 14.3236682,28.604285 13.9991402,29.0721449 C13.7280374,29.4606449 13.6172103,29.9248738 13.6891355,30.3756168 C13.7346075,30.6622804 13.8423224,30.9115981 14.0010421,31.0974626 C14.1792991,31.3075327 14.4521308,31.4679813 14.7901449,31.564285 C14.9856916,31.6185748 15.1864252,31.6472757 15.3866402,31.6472757 L15.3871589,31.6472757 C15.8237243,31.6472757 16.2165467,31.5163925 16.5217103,31.2686308 C16.8766682,30.9797196 17.0699673,30.5673598 17.0656449,30.1083178 C17.0616682,29.5726822 16.8031869,29.0524346 16.3744019,28.7185701 M26.209486,10.1540794 C27.7323645,11.7800047 28.2066215,14.2474206 27.941743,16.2708364 C27.6391729,18.5783224 26.2407804,20.7134299 23.9144486,22.1291121 C22.0694626,23.2517336 19.6459626,23.6997103 17.2611916,23.7209766 C17.2421729,24.0991028 17.1666168,25.4015374 17.1285794,25.6076308 C17.0725607,25.9114112 16.966229,26.0753178 16.8360374,26.2454486 C16.5799766,26.5791402 16.1356308,26.794743 15.6943972,26.9204393 C15.3435888,27.0202009 14.996757,27.0630794 14.7507243,27.0630794 C14.7090561,27.0630794 14.6684252,27.0608318 14.6286589,27.0558178 C14.3693131,27.0264252 14.0814393,26.9045327 13.9033551,26.7058738 C13.7256168,26.507215 13.6248178,26.2559953 13.6013037,25.9714065 L13.5814206,25.7143084 C13.5309346,25.4928271 13.2546449,14.2806168 13.308243,14.4801402 C13.3481822,13.136729 15.5171776,12.9022804 16.6940888,13.1394953 C17.8734206,13.377229 17.5748271,14.8102009 17.543014,16.5715047 C17.543014,16.5715047 17.4869953,18.8878084 17.378243,21.3353411 C18.8795093,21.2765561 20.0723271,20.8486355 21.1887243,20.2939813 C23.4433037,19.1763738 24.6366402,17.4620981 24.6366402,14.9371075 C24.6366402,12.4121168 22.1783879,9.58438318 17.6438131,9.58438318 C13.1094112,9.58438318 11.1629346,10.7280981 8.96731308,12.544729 C8.47230841,12.9541495 8.09107009,13.3668551 7.73040654,13.6384766 C7.36991589,13.910271 6.41241121,13.9517664 6.15565888,13.3160234 C5.84634579,12.5495701 6.42434112,11.6951121 6.76391121,11.281715 C7.29712617,10.6326589 8.61252804,9.32538318 10.0702243,8.56584579 C11.7398925,7.69427103 13.7826729,6.75561215 16.626486,6.68385981 C19.1993692,6.61885047 23.2615888,6.82719159 26.1877009,10.1322944" fill="#ffffff"></path>
            </g>
        </symbol>
    </svg>
    <div class="pe-footer--logo">
        <svg role="img" aria-label="Pearson logo">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#pearson-logo"></use>
        </svg>
        <ul></ul>
        <p class="pe-label">Copyright<span>&copy;</span>2018 Pearson Education Inc. All Rights Reserved.</p>
    </div>
  `;
  

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-footer');

  class Footer extends HTMLElement {
    static get observedAttributes() {
      return ['type'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true);

      this.shadowRoot.appendChild(clone);
    }

    connectedCallback() {
      this._renderFooter(clone);
    }

    _renderFooter(parentNode){
      let nobranding = true,
          footerLinks, textNode,
          liNode = document.createElement("LI"),
          aNode = document.createElement("A");

      const urlArray = this.getAttribute('url').split(','),
            textArray = this.getAttribute('text').split(',');
      const arrayLength = urlArray.length<textArray.length?urlArray.length:textArray.length;

      if (this.hasAttribute('type')) {
        const footerType = this.getAttribute('type'),
              footerBody = parentNode.querySelector('.pe-footer');

        switch(footerType) {
          case 'glp':
            footerBody.classList.add('pe-footer--glp');
            break;
          case 'lightText':
            footerBody.classList.add('pe-footer--light');
            break;
          case 'branding':
            nobranding = false;
            break;
          default:
            return;
        }
      }

      if (nobranding === true) {
        footerBody.appendChild(noBrandingTemp);
      } else {
        footerBody.appendChild(withBrandingTemp);
      }

      footerLinks = footerBody.querySelector('ul');
      aNode.setAttribute('target', '_blank');
      for (let i = 0; i < arrayLength; i ++) {
        textNode = document.createTextNode(textArray[i]);
        aNode.appendChild(textNode);
        aNode.setAttribute('href', urlArray[i]);
        liNode.appendChild(aNode);
        footerLinks.appendChild(liNode);
      }
    }
  }

  customElements.define('pearson-footer', Footer);
})(window, document);
