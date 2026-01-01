'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5e162034d6a7f207456f6d5afee8e6d1",
"assets/AssetManifest.bin.json": "8bf01d8d2326d4c0066616ff6a17556b",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/dev/backend/dark/appwrite.png": "895ad688ef2c249d42807ee99875ed6f",
"assets/assets/icons/dev/backend/dark/auth0.png": "40619b092b6a5cd322056e6f82d46298",
"assets/assets/icons/dev/backend/dark/c.png": "afe4187ed51218b0074ae0d3ec50e52e",
"assets/assets/icons/dev/backend/dark/cpp.png": "b4da2c28f70f8034c3ce890474152fa7",
"assets/assets/icons/dev/backend/dark/dartfrog.png": "7199b3cbdd2f1781f08803ca822eb348",
"assets/assets/icons/dev/backend/dark/django.png": "9486868efea1adf58215285825dc7b4a",
"assets/assets/icons/dev/backend/dark/express-js.png": "731aa87c6d730c508c19e95c6c68f304",
"assets/assets/icons/dev/backend/dark/firebase.png": "7249b536111f9d3170bd679ddaf02fdb",
"assets/assets/icons/dev/backend/dark/firecamp.png": "9d85ec9efd99df89893a1bd7ea57bb57",
"assets/assets/icons/dev/backend/dark/graphql.png": "abd5d2fd57033161932003030066fb68",
"assets/assets/icons/dev/backend/dark/hoppscotch.png": "fa7c1ab7605c11f70a5ebfb89cdd76dc",
"assets/assets/icons/dev/backend/dark/java.png": "45f0c1f2b8b56233994615ff62f80b0b",
"assets/assets/icons/dev/backend/dark/kotlin.png": "b0de93adfba4ab7b735c22b87eacf0ee",
"assets/assets/icons/dev/backend/dark/microsoft-dotnet-core.png": "9b286a87f27713faf2a5b7f2ad72076a",
"assets/assets/icons/dev/backend/dark/mongodb.png": "4c44ce72af10f9e04a6e965c98e10a8c",
"assets/assets/icons/dev/backend/dark/nhost.png": "db478bee7068358b2a7e73c2ee75b30d",
"assets/assets/icons/dev/backend/dark/node-js.png": "11d265d356bbea5a16c257c242496ede",
"assets/assets/icons/dev/backend/dark/postgresql.png": "9f20fbf9bd523128412461d89d0e0f4d",
"assets/assets/icons/dev/backend/dark/postman.png": "32449915bef0671d06fbd53ef4567cf1",
"assets/assets/icons/dev/backend/dark/python.png": "50cf3a63a5789046b61aead196921f85",
"assets/assets/icons/dev/backend/dark/serverpod.png": "770501898b10a85b10a33f7938dc7e20",
"assets/assets/icons/dev/backend/dark/sqlite.png": "0e76df241e9e549bc5166705aa80a3b7",
"assets/assets/icons/dev/backend/dark/supabase.png": "41c154c0b6578c19bb9b089812c19601",
"assets/assets/icons/dev/backend/dark/swagger.png": "411c185e93232c436b24ba3f2b4f49e3",
"assets/assets/icons/dev/backend/light/appwrite.png": "2f46c932eac746e11151df1ae2d7c775",
"assets/assets/icons/dev/backend/light/auth0.png": "95b5189523beb886ec561795e493d387",
"assets/assets/icons/dev/backend/light/c.png": "52a702e1a52632e539053a2e67c2b116",
"assets/assets/icons/dev/backend/light/cpp.png": "bddf5e8d3e59003549dbb91f9eaea1d4",
"assets/assets/icons/dev/backend/light/dartfrog.png": "1d5d42ff39b5a6a4d4e2e231b494af30",
"assets/assets/icons/dev/backend/light/django.png": "69a02b4b512b5a9abd9b11c8c10fd780",
"assets/assets/icons/dev/backend/light/express-js.png": "c6bbc5b17eabef02bdcb389957e8c317",
"assets/assets/icons/dev/backend/light/firebase.png": "7cd25894e77762dd3cb979903c303bde",
"assets/assets/icons/dev/backend/light/firecamp.png": "bc5e26b49a221c5370b89922bbb9bd2d",
"assets/assets/icons/dev/backend/light/graphql.png": "c0be17a3db2181670ed5d8c512883f11",
"assets/assets/icons/dev/backend/light/hoppscotch.png": "c4243218fbde64a3e892277a0d2ffb31",
"assets/assets/icons/dev/backend/light/java.png": "bc91d49474c980674d23d9f4cc013310",
"assets/assets/icons/dev/backend/light/kotlin.png": "2628bf013e72e2f178acae6921e6f902",
"assets/assets/icons/dev/backend/light/microsoft-dotnet-core.png": "7ea0d4301ec27cfff56b6c8c4f45b010",
"assets/assets/icons/dev/backend/light/mongodb.png": "c92a25cc686fa14120e742d0ab02c39d",
"assets/assets/icons/dev/backend/light/nhost.png": "c7912a943c065973dcfed92c3037805b",
"assets/assets/icons/dev/backend/light/node-js.png": "85dbc6cd847c6d1c992e8ed1bf696fd4",
"assets/assets/icons/dev/backend/light/postgresql.png": "8794f5b629d4621212ed9629104d3ac1",
"assets/assets/icons/dev/backend/light/postman.png": "c3d5b575204e6e8421dfa885f4c7e162",
"assets/assets/icons/dev/backend/light/python.png": "ef449637caad03a8e4e2adcfae50fd5e",
"assets/assets/icons/dev/backend/light/serverpod.png": "e021111d50efdcada29975811fef98bf",
"assets/assets/icons/dev/backend/light/sqlite.png": "7f367664950caf3c81b48574eb76402f",
"assets/assets/icons/dev/backend/light/supabase.png": "3a76654ee3f39eed710eb0a076620a07",
"assets/assets/icons/dev/backend/light/swagger.png": "8b6b689dddc2c9f6bd1595225f8c4bbf",
"assets/assets/icons/dev/blog/dark/blogger.png": "59e2c68feebf49936038152a0b971dd8",
"assets/assets/icons/dev/blog/dark/devcommunity.png": "88d8c267aaa393f6cc8f002db19325a2",
"assets/assets/icons/dev/blog/dark/hashnode.png": "91fab555990ca5e3cd553a168a7ab964",
"assets/assets/icons/dev/blog/dark/medium.png": "604694597a9c401a242ae7aafb5023ed",
"assets/assets/icons/dev/blog/light/blogger.png": "9ee8326d2ceaf85605f81c8e5de114da",
"assets/assets/icons/dev/blog/light/devcommunity.png": "7c19e422c1be71349b7177d2fb6bd57a",
"assets/assets/icons/dev/blog/light/hashnode.png": "5f56d0aa87ad4f272b51056e9feaeae5",
"assets/assets/icons/dev/blog/light/medium.png": "048cbbd21fb2bd48802c62a7a20e1621",
"assets/assets/icons/dev/business/dark/clickup.png": "484ea9377ec38c917ed54e25d1145d8c",
"assets/assets/icons/dev/business/dark/google-admob.png": "ddd886a64ce1f7bb90eeadadac968a42",
"assets/assets/icons/dev/business/dark/google-ads.png": "93e132d050a9305c964db2c3a7ef9698",
"assets/assets/icons/dev/business/dark/google-adsense.png": "c71d9ded03daccf5fe82268366647f73",
"assets/assets/icons/dev/business/dark/google-analytics.png": "0967d04febd8ebc8b7a96f89321faa03",
"assets/assets/icons/dev/business/dark/google-calendar.png": "85d33d9a8f17bb155e531ac578f51fce",
"assets/assets/icons/dev/business/dark/google-docs.png": "a4a5708361e71c3c59dbe51ea3680269",
"assets/assets/icons/dev/business/dark/google-drive.png": "90cefcfe4482ed18cfe37655881ca373",
"assets/assets/icons/dev/business/dark/google-forms.png": "afab0c6ea1e97688cffe07e46a43b010",
"assets/assets/icons/dev/business/dark/google-gmail.png": "dd3dd891fa3ced968f44927cad51ec77",
"assets/assets/icons/dev/business/dark/google-keep.png": "f05f803e1c683c2e22f6aafde7a16c07",
"assets/assets/icons/dev/business/dark/google-looker-studio.png": "1934524ce99552a687f3ca218ee57e84",
"assets/assets/icons/dev/business/dark/google-maps.png": "8c36bd6e51db941da04aaa310d6963b1",
"assets/assets/icons/dev/business/dark/google-meet.png": "09ab826336ade52902fb55f8922c5fa4",
"assets/assets/icons/dev/business/dark/google-my-business.png": "11a9a6aaedfa32d69487ad3c707164d5",
"assets/assets/icons/dev/business/dark/google-photos.png": "a28c93936368e0c4cfc1c8faa3487535",
"assets/assets/icons/dev/business/dark/google-play-console.png": "9ff4a4c20aa2db0d86cf8007fd06f5c4",
"assets/assets/icons/dev/business/dark/google-search-console.png": "fb5850d7d5f025ab184a022ef9ca2245",
"assets/assets/icons/dev/business/dark/google-sheets.png": "f777d8410762ee093c6b898c7d2ee8cf",
"assets/assets/icons/dev/business/dark/google-slides.png": "a08d62d5616c05877df7ce45478b56ff",
"assets/assets/icons/dev/business/dark/google-tag-manager.png": "52ee8d1e9ad2c58dc545664e0045c2bf",
"assets/assets/icons/dev/business/dark/google-tasks.png": "21c6f0a1132a5e3072f99f4ce7a37c0b",
"assets/assets/icons/dev/business/dark/google-translate.png": "46cea063d6d0aeb18e8fa160cf9eb7e4",
"assets/assets/icons/dev/business/dark/jira.png": "0967b046eca8a0e62d6efc9e642e65fb",
"assets/assets/icons/dev/business/dark/microsoft-365.png": "3f2b9458f15eb4ac24ff6b3340020607",
"assets/assets/icons/dev/business/dark/microsoft-calendar.png": "859338711514d9baff8581036b1fd10c",
"assets/assets/icons/dev/business/dark/microsoft-excel.png": "6278e602d7a02b61242d517a61829915",
"assets/assets/icons/dev/business/dark/microsoft-forms.png": "0331fa9e2f79663b6904cbb9ac2103d8",
"assets/assets/icons/dev/business/dark/microsoft-onedrive.png": "2f6bc1b657e2ea2f1cb64709cf371a2d",
"assets/assets/icons/dev/business/dark/microsoft-onenote.png": "1207f87dd825a5a6d788f493b87bb178",
"assets/assets/icons/dev/business/dark/microsoft-outlook.png": "385115282afac686a7675537811e2381",
"assets/assets/icons/dev/business/dark/microsoft-power-automate.png": "f61dff3857e6166332d64a0412c2aa76",
"assets/assets/icons/dev/business/dark/microsoft-power-bi.png": "39374f9a63a8e895163d6794ad9b7d93",
"assets/assets/icons/dev/business/dark/microsoft-powerpoint.png": "12034e2e16fb4f1d2f5d9107117d8b1d",
"assets/assets/icons/dev/business/dark/microsoft-teams.png": "19444652d89d7fa158bb674756daf723",
"assets/assets/icons/dev/business/dark/microsoft-todo.png": "35d47fa5374634debbdce885678d2053",
"assets/assets/icons/dev/business/dark/microsoft-word.png": "05d74c85497f55a8a13bb9aeacb338d4",
"assets/assets/icons/dev/business/dark/notion.png": "871698132b35a1a50f20dd26bbfb6b10",
"assets/assets/icons/dev/business/dark/sendinblue.png": "3d6629829701fbbf64b8e45a88f34753",
"assets/assets/icons/dev/business/dark/slack.png": "f1cd98aadc9227b9fb4b8222c9755b9d",
"assets/assets/icons/dev/business/dark/trello.png": "68402bf2707bb1c3d0f886e60f49f27c",
"assets/assets/icons/dev/business/dark/zoom.png": "34af822e6c4c7024eadd54789e14e607",
"assets/assets/icons/dev/business/light/clickup.png": "91eed863c8a07a67bf53a28b6a1672f7",
"assets/assets/icons/dev/business/light/google-admob.png": "9fb1226ab72acade39c889e6dae49b64",
"assets/assets/icons/dev/business/light/google-ads.png": "00f1937d264ce68211e52a8c24395ff0",
"assets/assets/icons/dev/business/light/google-adsense.png": "b23ff7fee45498ef2957214934776b7d",
"assets/assets/icons/dev/business/light/google-analytics.png": "969cc1055a218014ebd38fe768d729a7",
"assets/assets/icons/dev/business/light/google-calendar.png": "eaff6ceaf28ce9b042e6595bc953ce41",
"assets/assets/icons/dev/business/light/google-docs.png": "ba05704493e74ec9c98299a67e8d75e5",
"assets/assets/icons/dev/business/light/google-drive.png": "194b242cd1a89c24898e49e2d71865ef",
"assets/assets/icons/dev/business/light/google-forms.png": "fef22da129f795462240bedbdbde70f3",
"assets/assets/icons/dev/business/light/google-gmail.png": "21770c68745c5f59f1c7f9beb23f6382",
"assets/assets/icons/dev/business/light/google-keep.png": "dc097eac173c9ed8d02aeda52eb82513",
"assets/assets/icons/dev/business/light/google-looker-studio.png": "0df4188c16ff0c62c8093d1ce65f9310",
"assets/assets/icons/dev/business/light/google-maps.png": "356aee67085bf0285532ec6aafb15e53",
"assets/assets/icons/dev/business/light/google-meet.png": "8c2bef376221e7eb2fa6e6585034d6e1",
"assets/assets/icons/dev/business/light/google-my-business.png": "5895e716a8f04d3737fb9869ecc145da",
"assets/assets/icons/dev/business/light/google-photos.png": "753b9f46514a024d92dde472fc0f53c0",
"assets/assets/icons/dev/business/light/google-play-console.png": "0e61d19817a0e4866fd43ce51d56b9e8",
"assets/assets/icons/dev/business/light/google-search-console.png": "92634e3161a0ab8e5a2dfcf236f1f8da",
"assets/assets/icons/dev/business/light/google-sheets.png": "c07b12d38f23edd2d9e4e6925cbfdaa6",
"assets/assets/icons/dev/business/light/google-slides.png": "80083e39e8148274918d893846b03843",
"assets/assets/icons/dev/business/light/google-tag-manager.png": "38bf925c167edeab1f684b4ace2c1f93",
"assets/assets/icons/dev/business/light/google-tasks.png": "ca128727791bcea4f072332a75b227c3",
"assets/assets/icons/dev/business/light/google-translate.png": "0d300120262691ece07bd442ee2a61f1",
"assets/assets/icons/dev/business/light/jira.png": "a741b695a6c814a585b2688cdafce3e2",
"assets/assets/icons/dev/business/light/microsoft-365.png": "ded5e0bdeacc675ab506a208650ee543",
"assets/assets/icons/dev/business/light/microsoft-calendar.png": "aa747fafee268fa7682250abae725c56",
"assets/assets/icons/dev/business/light/microsoft-excel.png": "52a07e66578bb05fcf48fa25014b6669",
"assets/assets/icons/dev/business/light/microsoft-forms.png": "3bf24aace11a03ab1ba4541a876b03a4",
"assets/assets/icons/dev/business/light/microsoft-onedrive.png": "03d3e078fb4fc24262738facd83c8a9f",
"assets/assets/icons/dev/business/light/microsoft-onenote.png": "f50b360672412bfed52c52eaaddcd514",
"assets/assets/icons/dev/business/light/microsoft-outlook.png": "8e00039764dd68d62a027db80e634eb9",
"assets/assets/icons/dev/business/light/microsoft-power-automate.png": "1cefd7290c2daebfaabaeaa8335adfee",
"assets/assets/icons/dev/business/light/microsoft-power-bi.png": "fc7384d303682d64bf28bd0442341012",
"assets/assets/icons/dev/business/light/microsoft-powerpoint.png": "00c7972079461b1cec7c6cc24a5f9db2",
"assets/assets/icons/dev/business/light/microsoft-teams.png": "849bad4ea248387338a41b73622fd71c",
"assets/assets/icons/dev/business/light/microsoft-todo.png": "b139fc2793895cc72408b88b2a14eef1",
"assets/assets/icons/dev/business/light/microsoft-word.png": "2a66318dd1d7bb42068015b8159c3ae2",
"assets/assets/icons/dev/business/light/notion.png": "1e49296e8f9153691b845e87d61c4f18",
"assets/assets/icons/dev/business/light/sendinblue.png": "89f280d338884e34796b9f5802e3e08c",
"assets/assets/icons/dev/business/light/slack.png": "a93a1642132707042ae6fa287db85c71",
"assets/assets/icons/dev/business/light/trello.png": "773b096ecc7a94a0e9baa6c1974cfdaf",
"assets/assets/icons/dev/business/light/zoom.png": "4bd93c7268c1f5c601c96e09157fadaf",
"assets/assets/icons/dev/code/dark/android-studio.png": "46a88cb300a519416a2c5b5fa30233f4",
"assets/assets/icons/dev/code/dark/codepen.png": "38aeea8d470e9eb55286fc744acf11ee",
"assets/assets/icons/dev/code/dark/codesandbox.png": "2a71d402cf5e432d0a6e10cb14cf4a77",
"assets/assets/icons/dev/code/dark/codespaces.png": "9de24ae47cb2b4849b7fdb5c0332f690",
"assets/assets/icons/dev/code/dark/codewithme.png": "3ca374c34d08f00e89f392965786c8ba",
"assets/assets/icons/dev/code/dark/dartpad.png": "7920189b3588d2eb2c3b3e4aea7918a8",
"assets/assets/icons/dev/code/dark/fleet.png": "043dfbc0da50b3339fb5153cece1d347",
"assets/assets/icons/dev/code/dark/github-copilot.png": "c61e5802965222b8469d7f265639cef6",
"assets/assets/icons/dev/code/dark/gitpod.png": "4e54d935c087328dc4c36622db9da26a",
"assets/assets/icons/dev/code/dark/intellij-idea.png": "5da49c5a5efd3e1641c64636201de505",
"assets/assets/icons/dev/code/dark/jetbrains-toolbox.png": "539b385774924c0ab3f375174c8edb1b",
"assets/assets/icons/dev/code/dark/jsfiddle.png": "8f0d28dfec84ebb5934501f046485d40",
"assets/assets/icons/dev/code/dark/pycharm.png": "0a1dd7bf3de7bd08d583878d164cfec4",
"assets/assets/icons/dev/code/dark/replit.png": "7040e50ad6932f76038d608303f78abb",
"assets/assets/icons/dev/code/dark/stackblitz.png": "3166cb8079bb84c5f8939637d62d8815",
"assets/assets/icons/dev/code/dark/sublime-text.png": "8b0d799c67b09c86635c088bb546f76d",
"assets/assets/icons/dev/code/dark/visual-studio-code.png": "0bd23b2421c8cebf99bbb9cfc2ded893",
"assets/assets/icons/dev/code/dark/visual-studio.png": "bb36cdf683b4cb1050576cc918a366aa",
"assets/assets/icons/dev/code/dark/webstorm.png": "f704bf4a98954c3bd406f934705d2869",
"assets/assets/icons/dev/code/dark/windows-terminal.png": "e282b50d442854452e83eeabea2d80ad",
"assets/assets/icons/dev/code/light/android-studio.png": "b82872df46e007e921b7656f019ed13d",
"assets/assets/icons/dev/code/light/codepen.png": "3433a774f6af60698a649edc1a6cf698",
"assets/assets/icons/dev/code/light/codesandbox.png": "e58e206fe7ce6ddeacd713b6dffe356d",
"assets/assets/icons/dev/code/light/codespaces.png": "79f94d5afb0c55f70db3d209c95320f8",
"assets/assets/icons/dev/code/light/codewithme.png": "933f0ddd6e8de7b54545a15ad7fb7f4b",
"assets/assets/icons/dev/code/light/dartpad.png": "d40323f51e79e4ed234565310312be95",
"assets/assets/icons/dev/code/light/fleet.png": "29ac2be47e8a5dd69f47f57354f8a8fb",
"assets/assets/icons/dev/code/light/github-copilot.png": "dafe66c235a53e55803658ed880ff40c",
"assets/assets/icons/dev/code/light/gitpod.png": "1f2077efde2567bbf249a8e87630ae8d",
"assets/assets/icons/dev/code/light/intellij-idea.png": "e9e1724d775a0e1a592cbd644ee6364d",
"assets/assets/icons/dev/code/light/jetbrains-toolbox.png": "7238ccb3c55a56b2f8ca8eb42c71301f",
"assets/assets/icons/dev/code/light/jsfiddle.png": "258ef5de4eef7c137f7f56f3cd8caf93",
"assets/assets/icons/dev/code/light/pycharm.png": "0815c03b00e22854b887b001495f9fb4",
"assets/assets/icons/dev/code/light/replit.png": "edbe07dd75967524e5a27c9544f1baac",
"assets/assets/icons/dev/code/light/stackblitz.png": "d37374d30248e4ece20b0bd0f99e3da0",
"assets/assets/icons/dev/code/light/sublime-text.png": "c76e68484d7c0e0a7ac5f5ca4a6003b1",
"assets/assets/icons/dev/code/light/visual-studio-code.png": "04d1c5c68f23f9b95bb6dc6abe116e87",
"assets/assets/icons/dev/code/light/visual-studio.png": "0a15e62c094c5684d94c8f061fbd72a5",
"assets/assets/icons/dev/code/light/webstorm.png": "949b53033718f655cb29168ed19a4b57",
"assets/assets/icons/dev/code/light/windows-terminal.png": "2a4cb28d1dd3c9d9e135f841c43937ef",
"assets/assets/icons/dev/credential/dark/badgr.png": "76f7fd37635186fc8fa328b03455b0c8",
"assets/assets/icons/dev/credential/dark/credly.png": "a9ff84e45f66169afe02c36c1b5f994b",
"assets/assets/icons/dev/credential/dark/holopin.png": "585be23425dc9a02987ee17cf10fec9f",
"assets/assets/icons/dev/credential/light/badgr.png": "916f84168501312e588eff68c4078dea",
"assets/assets/icons/dev/credential/light/credly.png": "14c2711b8ab50eee6957c7ef1b2a82f0",
"assets/assets/icons/dev/credential/light/holopin.png": "a98ff827525de91bb7bf4ed7eac7d2a9",
"assets/assets/icons/dev/default/dark.png": "156b019d7897e2ea73157d0133531398",
"assets/assets/icons/dev/default/light.png": "6152fac894bc20e698749272af9d5262",
"assets/assets/icons/dev/designing/dark/audacity.png": "fea38ac149372a01ab4f63d36484fd8b",
"assets/assets/icons/dev/designing/dark/canva.png": "a8151dad59f391782c053f8697dab7e6",
"assets/assets/icons/dev/designing/dark/davinci-resolve.png": "30d224fde6133eb79f04ae1737900e92",
"assets/assets/icons/dev/designing/dark/figma.png": "28eba21c4bbaa5327d609dddcd22e05e",
"assets/assets/icons/dev/designing/dark/flaticon.png": "b15082dd121bbe43bfbbec4f15dfc691",
"assets/assets/icons/dev/designing/dark/freepik.png": "fa2c6a98b5174f89c3e8c095a113236a",
"assets/assets/icons/dev/designing/dark/gimp.png": "b06472defc12c665ef4b7dfbde5b17c9",
"assets/assets/icons/dev/designing/dark/google-fonts.png": "d998c07d163996b86fa242a8a21e87a7",
"assets/assets/icons/dev/designing/dark/handbrake.png": "d0023ce358f045cecbd865e1fad386b6",
"assets/assets/icons/dev/designing/dark/icons8.png": "a0e0dad22275885fcf770649a6c76123",
"assets/assets/icons/dev/designing/dark/iconscout.png": "73cdcaedb8a2d515d258d1b2db7f75de",
"assets/assets/icons/dev/designing/dark/lunacy.png": "d9feb906fe89043278305a0a4fbc4af8",
"assets/assets/icons/dev/designing/dark/material-design.png": "f31b68cbc6d2861d9a02772b686f3016",
"assets/assets/icons/dev/designing/dark/obs-studio.png": "35eef98b34505a30f34f7a3724ebf05c",
"assets/assets/icons/dev/designing/dark/pexels.png": "ef9cf48af9c4bf6fcd84558df8199d69",
"assets/assets/icons/dev/designing/dark/photopea.png": "cbc8dea31b702d32c00fd2a4ed66aa08",
"assets/assets/icons/dev/designing/dark/pixabay.png": "211df2d135a75540761f3b367a8e6d0f",
"assets/assets/icons/dev/designing/dark/playbook.png": "63fc7e6aa64e70eba697c85a52f633a5",
"assets/assets/icons/dev/designing/dark/powertoys.png": "f7f3c2810623757c92698f1e04c0af10",
"assets/assets/icons/dev/designing/dark/undraw.png": "e6bb950639bda0507378a1ff7a6d0067",
"assets/assets/icons/dev/designing/dark/unsplash.png": "103d0b22d78f54f6c9fd3e6ec619d923",
"assets/assets/icons/dev/designing/dark/wepik.png": "21d48a1f3ddd12c7c4285a4b3252224d",
"assets/assets/icons/dev/designing/light/audacity.png": "22c967271dd47790d384e9c7fe8e7145",
"assets/assets/icons/dev/designing/light/canva.png": "2c11f8694640e513a0b53d79da80f98f",
"assets/assets/icons/dev/designing/light/davinci-resolve.png": "75f3ed1ffe18e4f1c2055455bca524a7",
"assets/assets/icons/dev/designing/light/figma.png": "aa7717e0ddc1ef4ef62e35c2120e95f0",
"assets/assets/icons/dev/designing/light/flaticon.png": "f848392181d4515e64f4e7cf283317ad",
"assets/assets/icons/dev/designing/light/freepik.png": "daa9aa44f56cb2860fc61d29447c62d5",
"assets/assets/icons/dev/designing/light/gimp.png": "6b17b6130377337d10f8f59241504b3e",
"assets/assets/icons/dev/designing/light/google-fonts.png": "bd39a7b13acb4b98d88f59c34ec88013",
"assets/assets/icons/dev/designing/light/handbrake.png": "aafd0ed3c3bec14c28151638cd9722d5",
"assets/assets/icons/dev/designing/light/icons8.png": "5f7f50ee0d39b1fd00127cfa41521543",
"assets/assets/icons/dev/designing/light/iconscout.png": "3c0e139341d6379e143ba4adc3119c29",
"assets/assets/icons/dev/designing/light/lunacy.png": "600292e77f814f8b7754d0825b839072",
"assets/assets/icons/dev/designing/light/material-design.png": "4197f1aed02819b066dd7f04fd85e9d8",
"assets/assets/icons/dev/designing/light/obs-studio.png": "1c3856f9e328fd3712e461f63fcbb4d1",
"assets/assets/icons/dev/designing/light/pexels.png": "2eda16253e6ca6995a0aa44737850b39",
"assets/assets/icons/dev/designing/light/photopea.png": "f2a320f7915a04816d0c16ed8366ab9c",
"assets/assets/icons/dev/designing/light/pixabay.png": "96b42648e78f24a93ebceb6dd512f3a8",
"assets/assets/icons/dev/designing/light/playbook.png": "0fc6e76a2ddce1d25aa9724e885d4b0f",
"assets/assets/icons/dev/designing/light/powertoys.png": "e5bd4aba1d13343c901b9133882c30da",
"assets/assets/icons/dev/designing/light/undraw.png": "0233ba7418ce6f60fa9d91351e2395c0",
"assets/assets/icons/dev/designing/light/unsplash.png": "c837d0b4f8bc07fce11e1136b6fd131e",
"assets/assets/icons/dev/designing/light/wepik.png": "b087a98077baab74b95795e0c0bc1896",
"assets/assets/icons/dev/developer/dark/behance.png": "34210e5c50c274824d5c91067ee4ead7",
"assets/assets/icons/dev/developer/dark/codechef.png": "7858e877ba5aa8fa792f8d78f6053dde",
"assets/assets/icons/dev/developer/dark/codeproject.png": "e82851f5eceb276c873735aff235c729",
"assets/assets/icons/dev/developer/dark/codersrank.png": "06b0b654481bcd95ef88d8b84e286a7b",
"assets/assets/icons/dev/developer/dark/codewars.png": "34856319c7bd75cbd764b81fe957022e",
"assets/assets/icons/dev/developer/dark/dribbble.png": "918fecb4b24140f0b9a6fd845f4b6ab3",
"assets/assets/icons/dev/developer/dark/freecodecamp.png": "22398aeffd7f69a6da008282dca38267",
"assets/assets/icons/dev/developer/dark/glitch.png": "16d99b78b4103891357b2bd212cd84ad",
"assets/assets/icons/dev/developer/dark/google.png": "b5c347807527bf9cd75381d56ec7c418",
"assets/assets/icons/dev/developer/dark/googledevelopers.png": "ab990c0d9681a91fe50501ed726da32c",
"assets/assets/icons/dev/developer/dark/gravatar.png": "6e3836e1a562b22075a56a58620b3a37",
"assets/assets/icons/dev/developer/dark/hackerearth.png": "49b722d2982d7751de884cb210aedb12",
"assets/assets/icons/dev/developer/dark/hackerrank.png": "141dfdce2382b827530b785ce9d0a81f",
"assets/assets/icons/dev/developer/dark/kaggle.png": "815f289c09c90de77340fb34b9685be3",
"assets/assets/icons/dev/developer/dark/keybase.png": "356303ffd00ffe8e3a4bd8508a26be33",
"assets/assets/icons/dev/developer/dark/leetcode.png": "b9346842283f73ae187bf0d2752889a0",
"assets/assets/icons/dev/developer/dark/microsoft.png": "b47be3e043c438d2e0e85085c69a6e72",
"assets/assets/icons/dev/developer/dark/mlsa.png": "00ecd285ec963922a4cb5ea36d07e280",
"assets/assets/icons/dev/developer/dark/producthunt.png": "a73ce4d27f2b057d8593a04ea8404cb4",
"assets/assets/icons/dev/developer/dark/stackoverflow.png": "174efd08b629c57bc07a8613d22b8e61",
"assets/assets/icons/dev/developer/dark/topcoder.png": "da4ab008fd48a48a4931ac53283c33bf",
"assets/assets/icons/dev/developer/light/behance.png": "6f6d408bdd56e0c00cba19f1b51e90bf",
"assets/assets/icons/dev/developer/light/codechef.png": "e473209725e5f66a411acb8c1c928115",
"assets/assets/icons/dev/developer/light/codeproject.png": "cf6d4b4a4158fc778c09ae7425e5791f",
"assets/assets/icons/dev/developer/light/codersrank.png": "d1d18871a2abec4e659a6bde656f4faf",
"assets/assets/icons/dev/developer/light/codewars.png": "0d468014b454f9c74b4be1848f77bb2d",
"assets/assets/icons/dev/developer/light/dribbble.png": "51cf41d75807ec6dc5d8b76e90899cc8",
"assets/assets/icons/dev/developer/light/freecodecamp.png": "08572270e3ab0bd3f5ba7c538c96b87c",
"assets/assets/icons/dev/developer/light/glitch.png": "562fce0af603f59fef6676a022b60cdb",
"assets/assets/icons/dev/developer/light/google.png": "eb4468bf58e692ca5d526016680f7a29",
"assets/assets/icons/dev/developer/light/googledevelopers.png": "3cf39eb131c82cf5543a38b7030e492d",
"assets/assets/icons/dev/developer/light/gravatar.png": "0e202b22821cb2e8857b3263336384f8",
"assets/assets/icons/dev/developer/light/hackerearth.png": "afbbf1cf39f7a23cac1cfc6fcd3e418f",
"assets/assets/icons/dev/developer/light/hackerrank.png": "510217d55e203d0b3bb061ac6b2feacd",
"assets/assets/icons/dev/developer/light/kaggle.png": "97e9b1205ddf7e74d3b802c96d29617c",
"assets/assets/icons/dev/developer/light/keybase.png": "21386c09ea225e2a627a7b018836ffcd",
"assets/assets/icons/dev/developer/light/leetcode.png": "9b74059bdfd07b73679e38f6fdcae371",
"assets/assets/icons/dev/developer/light/microsoft.png": "21c232c725e74287856c88c8a89310eb",
"assets/assets/icons/dev/developer/light/mlsa.png": "1fd00f58bdcb6de1a80e4e745aeb3ed7",
"assets/assets/icons/dev/developer/light/producthunt.png": "62db34140fe0bb90333846a8a37ebada",
"assets/assets/icons/dev/developer/light/stackoverflow.png": "6ab70d703b3a780c51a8c2431b95476c",
"assets/assets/icons/dev/developer/light/topcoder.png": "a717d84b49dbb802c32325b75fec99e6",
"assets/assets/icons/dev/devops/dark/appstore.png": "9a18859e8fea55c54b84e74905ff7406",
"assets/assets/icons/dev/devops/dark/aws.png": "30cc29eb15b12aa4bab0f37acfb13701",
"assets/assets/icons/dev/devops/dark/bitbucket.png": "84db5ec597976a35aee0cfc44dd27cbc",
"assets/assets/icons/dev/devops/dark/bitrise.png": "aa81d6b20341a1cc0fb28572c5bf96ee",
"assets/assets/icons/dev/devops/dark/circleci.png": "1ffbc8167eede946a34923d30584e482",
"assets/assets/icons/dev/devops/dark/cloudflare.png": "10e5adad360ea7f2f0de8cd5b0e64819",
"assets/assets/icons/dev/devops/dark/codemagic.png": "1202b6251a09668600b8a1660f0059ca",
"assets/assets/icons/dev/devops/dark/digitalocean.png": "ac6a726562e3d594b3e956032443c51c",
"assets/assets/icons/dev/devops/dark/docker.png": "9d7ca0c852b407de2ebcf673c269a35d",
"assets/assets/icons/dev/devops/dark/git.png": "a120f7bc9b94d6812fc666254117daaa",
"assets/assets/icons/dev/devops/dark/github.png": "877e1ff518ffbf066e40473fcd42f5fa",
"assets/assets/icons/dev/devops/dark/gitkraken.png": "eae2c5cdd61940fe57e9f3f0e0a8d661",
"assets/assets/icons/dev/devops/dark/gitlab.png": "933d6b196ccabdf5c8f556688994d4e8",
"assets/assets/icons/dev/devops/dark/google-cloud-platform.png": "c45663b0c56637a4c31d0cdb0b3e4356",
"assets/assets/icons/dev/devops/dark/google-play.png": "0e90b497d7a4a549171e526e3186adbf",
"assets/assets/icons/dev/devops/dark/microsoft-azure.png": "d5f5897c94bdd9e65218bc0b92fc3a55",
"assets/assets/icons/dev/devops/dark/microsoft-store.png": "f3aa693a4c5032e55b4cb11c8d8afb30",
"assets/assets/icons/dev/devops/dark/netlify.png": "c3c1a3d2c08d1cccc7cc03d7746f2d83",
"assets/assets/icons/dev/devops/dark/sentry.png": "974fb5081ccadc3c7f0368fa73f958aa",
"assets/assets/icons/dev/devops/dark/vercel.png": "1a635caa928621c26f5be3d1aa6ccaf5",
"assets/assets/icons/dev/devops/light/appstore.png": "1fc17d18b17396aa97ed73a57787bb08",
"assets/assets/icons/dev/devops/light/aws.png": "3c0fa4f5bf83f825110edd7a393683b9",
"assets/assets/icons/dev/devops/light/bitbucket.png": "8a50bad02e78645703340aae2bb68eee",
"assets/assets/icons/dev/devops/light/bitrise.png": "286ed58af939d96a4a35b12072638118",
"assets/assets/icons/dev/devops/light/circleci.png": "2c490fb50a58223c9e29d0deed52324b",
"assets/assets/icons/dev/devops/light/cloudflare.png": "0654c3f4aaca6479384d7bb2811dccc7",
"assets/assets/icons/dev/devops/light/codemagic.png": "683465d40d30b47b9618d6b38f92499b",
"assets/assets/icons/dev/devops/light/digitalocean.png": "4f789ba35c3b3428fae9ed88ab7cb936",
"assets/assets/icons/dev/devops/light/docker.png": "254bff0a7c05eeb849204e930d12b457",
"assets/assets/icons/dev/devops/light/git.png": "3a1ddecad20380985219545f02338b9a",
"assets/assets/icons/dev/devops/light/github.png": "ea867ccdc02f44ea99be5c5e3b09cec6",
"assets/assets/icons/dev/devops/light/gitkraken.png": "f3ddc94d5b1f5534713492cda18aec76",
"assets/assets/icons/dev/devops/light/gitlab.png": "ec01d16633bd465694b6baaba05195f9",
"assets/assets/icons/dev/devops/light/google-cloud-platform.png": "916d99dd820e0539ead9c2ff869a25ba",
"assets/assets/icons/dev/devops/light/google-play.png": "df286819adb485452fa51a9a9f7a0e78",
"assets/assets/icons/dev/devops/light/microsoft-azure.png": "0fed414292510c24f53e560ec5c5cedb",
"assets/assets/icons/dev/devops/light/microsoft-store.png": "c8e7511907dd0ba4e8860b3c4c1dd132",
"assets/assets/icons/dev/devops/light/netlify.png": "2fcbb589c2481097115987a3bcd03503",
"assets/assets/icons/dev/devops/light/sentry.png": "5eb4f9bd4560eb29a3c3b431efcee226",
"assets/assets/icons/dev/devops/light/vercel.png": "13e9d6f23803b497325b856578b31110",
"assets/assets/icons/dev/donation/dark/buymeacoffee.png": "0bb7e850a736b19dbfca94c257ffeec0",
"assets/assets/icons/dev/donation/dark/kofi.png": "c6b32046b654372367d1ff5be063b8ec",
"assets/assets/icons/dev/donation/light/buymeacoffee.png": "9086293eecbd7be31a348a01b6f1a51b",
"assets/assets/icons/dev/donation/light/kofi.png": "1d2fc3014ff33eb1f080f4749a5a2d8b",
"assets/assets/icons/dev/frontend/dark/android.png": "ef94c2597844cf1d9aaddb37f4dbbc66",
"assets/assets/icons/dev/frontend/dark/bootstrap.png": "946c5574e8cc01ba4bb203182f87e85a",
"assets/assets/icons/dev/frontend/dark/c-sharp.png": "6c8bd554272ddeec79826b26aee22147",
"assets/assets/icons/dev/frontend/dark/css.png": "cdd0e6cb08fd1e9a30ec04810199dd60",
"assets/assets/icons/dev/frontend/dark/dart.png": "7920189b3588d2eb2c3b3e4aea7918a8",
"assets/assets/icons/dev/frontend/dark/flutter.png": "b507df59679ae30f5173e7a44747efe3",
"assets/assets/icons/dev/frontend/dark/flutterflow.png": "5c2069f11c02b5455d8144ded6c642b1",
"assets/assets/icons/dev/frontend/dark/google-sites.png": "a64d5f45ba37eca6e35994a40c48582f",
"assets/assets/icons/dev/frontend/dark/html.png": "e37cffa5e6f72e81eaae0290b800ab32",
"assets/assets/icons/dev/frontend/dark/javascript.png": "75f6148fdcdaa2b7a91d5e9583af1857",
"assets/assets/icons/dev/frontend/dark/microsoft-dotnet.png": "334266d4ae5bede167b01acf07a40d7b",
"assets/assets/icons/dev/frontend/dark/next-js.png": "177426b3dee8fbe045a47c0ffb54f0a6",
"assets/assets/icons/dev/frontend/dark/react.png": "5b7a751ef944688e07181d2d6193210b",
"assets/assets/icons/dev/frontend/dark/wix.png": "441405aeabc004ba0e2be14adc2b3289",
"assets/assets/icons/dev/frontend/dark/wordpress.png": "ae74de10f5c2faec61170f15a488d2b4",
"assets/assets/icons/dev/frontend/dark/xamarin.png": "e91391a5e3335960b18f071e9e937ccb",
"assets/assets/icons/dev/frontend/light/android.png": "67fe8b4a86dd58c4f031b6fcb27f8439",
"assets/assets/icons/dev/frontend/light/bootstrap.png": "58a7c33c9baad047c995928193614919",
"assets/assets/icons/dev/frontend/light/c-sharp.png": "0567ee691cb94ff86fe9e0e800cd7d3a",
"assets/assets/icons/dev/frontend/light/css.png": "8f3433fa14f1de5f4fd7a790dc303ccc",
"assets/assets/icons/dev/frontend/light/dart.png": "d40323f51e79e4ed234565310312be95",
"assets/assets/icons/dev/frontend/light/flutter.png": "75c78d373832c93dfab3664cd5ac366d",
"assets/assets/icons/dev/frontend/light/flutterflow.png": "45fbff214ef8445d6412c000d16c94c3",
"assets/assets/icons/dev/frontend/light/google-sites.png": "fdc3908ef9f1a550b8f79684d2c37799",
"assets/assets/icons/dev/frontend/light/html.png": "82a5cd76d9d8264e8eeb4f7d9b484df3",
"assets/assets/icons/dev/frontend/light/javascript.png": "0110ad63077fd5638f113b0ac95132ea",
"assets/assets/icons/dev/frontend/light/microsoft-dotnet.png": "a30842fd83f77d4df45e04a8e91033f2",
"assets/assets/icons/dev/frontend/light/next-js.png": "febf7d576a0c7c78a9375e374760b688",
"assets/assets/icons/dev/frontend/light/react.png": "b15337e2e04da649bfc06cd7e213ceb5",
"assets/assets/icons/dev/frontend/light/wix.png": "bc39b9b5378c33023bad744109beae5d",
"assets/assets/icons/dev/frontend/light/wordpress.png": "d3ad94f9b90b1fac190bbd3075baadee",
"assets/assets/icons/dev/frontend/light/xamarin.png": "05ffd460b4fb43487d73ee26de5c0c9e",
"assets/assets/icons/dev/social/dark/applemusic.png": "d381d1db469b7cbd8c347a723a1fa5b5",
"assets/assets/icons/dev/social/dark/clubhouse.png": "21d7b1639e1df742e408d73ea0e5fa50",
"assets/assets/icons/dev/social/dark/discord.png": "c77d0d48cada95f10f8e7d9dc96eb3e9",
"assets/assets/icons/dev/social/dark/facebook.png": "e9a915fab5ac05883ceeca90db79d862",
"assets/assets/icons/dev/social/dark/facebookmessenger.png": "b5399ee1f4e9c8fcbfe0e4a24eaa42b7",
"assets/assets/icons/dev/social/dark/imdb.png": "68a6f873b72af2e6a6143250088add84",
"assets/assets/icons/dev/social/dark/instagram.png": "2aed3d2f6658ab430d416f432329b768",
"assets/assets/icons/dev/social/dark/linkedin.png": "998afac7e8661cc884f967386138236f",
"assets/assets/icons/dev/social/dark/linktree.png": "31d7308c5871ebf7e73d661b2add966a",
"assets/assets/icons/dev/social/dark/mastodon.png": "e0957f77b5195e44216b9f2ec68c7598",
"assets/assets/icons/dev/social/dark/pinterest.png": "9fffbf402f3e4afd7a35e4ca1df8d44f",
"assets/assets/icons/dev/social/dark/quora.png": "7edfbb6b3cf58605fc5c6a5d293145e8",
"assets/assets/icons/dev/social/dark/reddit.png": "82ed372548bc9ba9e7b0e392c68912f5",
"assets/assets/icons/dev/social/dark/skype.png": "56cc59ce8e6886b599b9aeab00d450fc",
"assets/assets/icons/dev/social/dark/snapchat.png": "1ec0d40be0f3140722acea3977584b92",
"assets/assets/icons/dev/social/dark/spotify.png": "bf3d1f07909edcf443347db07c65265f",
"assets/assets/icons/dev/social/dark/telegram.png": "2635fd9898a7b0cd374d1b7067edf7a3",
"assets/assets/icons/dev/social/dark/tiktok.png": "27ae04946fb2d3260b53d4dbd047e756",
"assets/assets/icons/dev/social/dark/tmdb.png": "c168472aba4e6f3f6f60ae14c9a18496",
"assets/assets/icons/dev/social/dark/twitch.png": "12531cb9037bf4235c1cd91c9cde8645",
"assets/assets/icons/dev/social/dark/twitter.png": "924b2b391fcc9ef960cc656c75e3f735",
"assets/assets/icons/dev/social/dark/whatsapp.png": "d03df92cbe40b1a94feef8a5f2e04a90",
"assets/assets/icons/dev/social/dark/youtube.png": "2753741c3e3a90aaad9dcf42c49c1774",
"assets/assets/icons/dev/social/light/applemusic.png": "7486399a7625be11841b19f67912fca7",
"assets/assets/icons/dev/social/light/clubhouse.png": "aedf6911b347778146aa4fd679d3c648",
"assets/assets/icons/dev/social/light/discord.png": "ba7846d77d1cf70303ebb60266b41055",
"assets/assets/icons/dev/social/light/facebook.png": "5d75df39c883237f4c5abc0d83cd61d2",
"assets/assets/icons/dev/social/light/facebookmessenger.png": "160ac5c239f0077a21679563e9a13e79",
"assets/assets/icons/dev/social/light/imdb.png": "eb2a7cedb34068100001dcc5b416b5ca",
"assets/assets/icons/dev/social/light/instagram.png": "01e3b25739ead125182ecbe627a2cce7",
"assets/assets/icons/dev/social/light/linkedin.png": "990acefa194f06091386335c104e4283",
"assets/assets/icons/dev/social/light/linktree.png": "894069e7cfe6e6e1b71f7df131ef293c",
"assets/assets/icons/dev/social/light/mastodon.png": "26367bbee2afe380ede072f44c697831",
"assets/assets/icons/dev/social/light/pinterest.png": "5d81e4964d58fe3f03c841a373c06c38",
"assets/assets/icons/dev/social/light/quora.png": "a265399a1217ad5e87071e60e63c2679",
"assets/assets/icons/dev/social/light/reddit.png": "508d536baee5fd069d179c1220162f6b",
"assets/assets/icons/dev/social/light/skype.png": "e670d727245465b3793b6bd139522e05",
"assets/assets/icons/dev/social/light/snapchat.png": "24c820200812492555b394949af94051",
"assets/assets/icons/dev/social/light/spotify.png": "f59deb5f426af266e8827a8465e82b6f",
"assets/assets/icons/dev/social/light/telegram.png": "515abff4ec9aa933e12ff38d6d6a79c1",
"assets/assets/icons/dev/social/light/tiktok.png": "8e3e97982d7eed8ab3a714c91bc334b3",
"assets/assets/icons/dev/social/light/tmdb.png": "8c977073a55e7c581f7123baafd8569c",
"assets/assets/icons/dev/social/light/twitch.png": "f11505ddd7baa7eb9188e2c5a49379a1",
"assets/assets/icons/dev/social/light/twitter.png": "7b4942463b999423a0512256275eb5be",
"assets/assets/icons/dev/social/light/whatsapp.png": "e7870508fd42200e4ffec9d67988ea60",
"assets/assets/icons/dev/social/light/youtube.png": "7923c5bc84f0011215709e1be2b207dd",
"assets/assets/icons/dev/webgen/dark/alchemy.png": "11051cdf1cffa0363b00bc1320c1ca32",
"assets/assets/icons/dev/webgen/dark/bitcoin.png": "638855b1cf14f0348c578c80dd5dd6ec",
"assets/assets/icons/dev/webgen/dark/brave.png": "fb15ef986e7d315f23b167add2c9e068",
"assets/assets/icons/dev/webgen/dark/ethereum.png": "ced7f7e725611558d6e3511c40ee2c72",
"assets/assets/icons/dev/webgen/dark/keras.png": "7caca7fe8131706fc4c8c844a40e5058",
"assets/assets/icons/dev/webgen/dark/metamask.png": "0db1b755e818a2c78ee6ce5880b76882",
"assets/assets/icons/dev/webgen/dark/moralis.png": "67a9d6b24e2752511abc7cd51898872b",
"assets/assets/icons/dev/webgen/dark/numpy.png": "d7d16e3bbc882d5bc8327115c6d22113",
"assets/assets/icons/dev/webgen/dark/pytorch.png": "875fe0e82a4c1817d2896a6465f5875a",
"assets/assets/icons/dev/webgen/dark/remix-project.png": "46600abcf725e89b8ac45e9977d960f8",
"assets/assets/icons/dev/webgen/dark/scikit-learn.png": "b42c73eb56d73f167c18f417bd9529bd",
"assets/assets/icons/dev/webgen/dark/solana.png": "fe3a1340c7c1f2d371722829e1bb27e6",
"assets/assets/icons/dev/webgen/dark/solidity.png": "cf5b49f48700fdc6caf4cfde25ac0015",
"assets/assets/icons/dev/webgen/dark/tensorflow.png": "5721a5a67c76cbffc048b13a130692e1",
"assets/assets/icons/dev/webgen/dark/tether.png": "2de666c87f552ee38f077d888de4a4c7",
"assets/assets/icons/dev/webgen/dark/usdcoin.png": "c340188c5055a183948f89f2ae2d6ebd",
"assets/assets/icons/dev/webgen/dark/web3auth.png": "209af08510ff03dfec4eba21beaca849",
"assets/assets/icons/dev/webgen/light/alchemy.png": "7a47e781d26085a4db458ec4bc234bc4",
"assets/assets/icons/dev/webgen/light/bitcoin.png": "8bc60a51ae4a8f5ac6af1db1d0274f10",
"assets/assets/icons/dev/webgen/light/brave.png": "e39c7e43b9921906a49b087836ec9781",
"assets/assets/icons/dev/webgen/light/ethereum.png": "51c9ea40cbaa99e1258e7d8177ca41d4",
"assets/assets/icons/dev/webgen/light/keras.png": "276cd81fff1d6abde9737758aea1ac4c",
"assets/assets/icons/dev/webgen/light/metamask.png": "cea2e3dd1a9bd28666252914c0e6c539",
"assets/assets/icons/dev/webgen/light/moralis.png": "9a0f7140e9421590355f74e583a0d84f",
"assets/assets/icons/dev/webgen/light/numpy.png": "0d1a38f66c70f522f3cae6109b26e5d1",
"assets/assets/icons/dev/webgen/light/pytorch.png": "c5d3ba15095b8ead7949fe61a65db900",
"assets/assets/icons/dev/webgen/light/remix-project.png": "dc3f717aa8bede35ae79f4bac457628b",
"assets/assets/icons/dev/webgen/light/scikit-learn.png": "712727854afd0568f54b2218d76043a4",
"assets/assets/icons/dev/webgen/light/solana.png": "54d0e18c260ba1bc5fcdd35cfd72e684",
"assets/assets/icons/dev/webgen/light/solidity.png": "d761b66d687e43fb463f56a6437df02d",
"assets/assets/icons/dev/webgen/light/tensorflow.png": "419226538864508f3dba778b02da0c67",
"assets/assets/icons/dev/webgen/light/tether.png": "af6fd3c27293cb9ea29258ebbd5c1db9",
"assets/assets/icons/dev/webgen/light/usdcoin.png": "d18ee4e2360ab337eae9c242b2f662c4",
"assets/assets/icons/dev/webgen/light/web3auth.png": "f737ef392e8e732af585988d76df38df",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/logo.png": "99d5f157c1281deae6519eb06dbcbabe",
"assets/assets/images/splash.png": "27df280f15c4f9409a220cb663644a13",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/fonts/MaterialIcons-Regular.otf": "b9dd810b4b5ea9fca3cca5aebdfe0bcd",
"assets/NOTICES": "b231e9a6140a2f0ef8465ef7c4c4d90b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "c4d9830fad35b331257259b75c23228d",
"icons/apple-touch-icon.png": "c8722fb470a194fd892e7ca76e8d7248",
"icons/favicon.ico": "5122351650ae623a757289c48338a8f4",
"icons/icon-192-maskable.png": "3835c97708e1788952d43e6a2a081da2",
"icons/icon-192.png": "0acd9f9c92e61e45e7474f900c54efad",
"icons/icon-512-maskable.png": "c1ef942cdfca19bcc456f5903e17736c",
"icons/icon-512.png": "851030b8b32eeaf3b2715b5ddebe0a43",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "10234b2171aa82e0bac8295ffff54538",
"/": "10234b2171aa82e0bac8295ffff54538",
"main.dart.js": "079aebc2a16a260e5d2f9d4ae0873fb9",
"manifest.json": "3e479a2ba7b1ff02ee66e10cfe856fdf",
"version.json": "823532a7eecbbec3914019279c1ab45b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
