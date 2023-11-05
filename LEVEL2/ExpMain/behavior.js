function shuffle(array) {
	// While there remain elements to shuffle...
	for(let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * i);
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
  }
  
  function InsertLineBreaks () {
	  var sentencesDiv = document.getElementById ("sentences");
	  var sentenceSpans = sentencesDiv.getElementsByTagName ("span");
	  for (var i = 1; i < sentenceSpans.length; i++) {
		  var lineBreak = document.createElement ("br");
		  sentencesDiv.insertBefore (lineBreak, sentenceSpans[i]);
	  }
  }
  
  function insertAfter(referenceNode, newNode) {
	  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  const arrSum = arr => arr.reduce((a,b) => a + b, 0); 
  let LangLbl = ["en", "be", "bg", "cs", "da", "de", "el", "es", "et", "fi", "fr", "ga", "hi", "hr", "hu", "in", "is", "it", "iw", "ja", "ko", "lt", "lv", "mk", "ms", "mt", "nl", "no", "pl", "pt", "ro", "ru", "sk", "sl", "sq", "sr", "sv", "th", "tr", "uk", "vi", "zh", "ar"];
  
  let IfClick = false;
  
  
  let SubjectDemographicArray = [
  [["IsPar"],[]],
  [["DoB"],[]],
  [["Gend"],[]],
  [["Handns"],[]],
  [["Race"],[]],
  [["Eth"],[]],
  [["Eco"],[]],
  [["Ed"],[]],
  [["NtvLng"],[]],
  [["WhcOthrLng1"],[]],
  [["Prfcncy1"],[]],
  [["Age"],[]],
  [["SID"],[]],
  [["Pass"],[]],
  ];
  
  
  
  let Gender = [
			  "Male",
			  "Female",
			  "Other"
		  ];
		  let Handedness = [
			  "Right",
			  "Left"
		  ];
		  let Race = [
			  "Black or African-American",
			  "American Indian or Alaskan Native",
			  "Asian",
			  "Native Hawaiian or other Pacific islander",
			  "From multiple races",
			  "White",
			  "Other"
		  ];
		  let Ethnicity = [
			  "Hispanic/Latino",
			  "not Hispanic/Latino"
		  ];
  
		  let SocIndex = [
			  "We have barely enough to get by",
  "We have enough to get by—but no more",
  "We are solidly middle class",
  "We have plenty of extras",
  "We have plenty of luxuries"
		  ];
  
		  let Education = [
			  "Don’t know or not applicable",
  "Did not finish high school",
  "Graduated from high school",
  "Currently attending college",
  "Attended college but did not complete degree",
  "Completed an Associate degree",
  "Completed a Bachelor degree",
  "Completed a Master’s degree",
  "Completed a Doctoral or Professional degree"
		  ];

		  let Demographs = [
			  Gender, Handedness, Race, Ethnicity, SocIndex, Education
		  ];
  
  function Demographics() {
	  var DemographicSection = document.createElement("div");
	  DemographicSection.className = "container-fluid";
	  DemographicSection.id = "DemoDiv";
	  document.body.prepend(DemographicSection);
  
	  var DemoWelcome = document.createElement("div");
	  DemoWelcome.className = "row text-center justify-content-md-center mb-1 pb-1";
	  DemographicSection.appendChild(DemoWelcome);
	  var DemoWelcomeDiv = document.createElement("div");
	  DemoWelcomeDiv.className = "alert alert-success";
	  DemoWelcomeDiv.role = "alert";
	  DemoWelcome.appendChild(DemoWelcomeDiv);
	  var DemoWelcomeHead = document.createElement("h4");
	  DemoWelcomeHead.className = "alert-heading";
	  DemoWelcomeHead.innerText = "Welcome!";
	  DemoWelcomeDiv.appendChild(DemoWelcomeHead);
	  var DemoWelcomeP1 = document.createElement("p");
	  DemoWelcomeP1.innerText = "We thanks you for your valued participation in this experiment!";
	  DemoWelcomeDiv.appendChild(DemoWelcomeP1);
	  var hr = document.createElement("hr");
	  DemoWelcomeDiv.appendChild(hr);
	  var DemoWelcomeP2 = document.createElement("p");
	  DemoWelcomeP2.className = "mb-0";
	  DemoWelcomeP2.innerText = "Please tell us more about your self";
	  DemoWelcomeDiv.appendChild(DemoWelcomeP2);
	  var hr = document.createElement("hr");
	  DemoWelcomeDiv.appendChild(hr);
	  var DemoWelcomeP3 = document.createElement("p");
	  DemoWelcomeP3.className = "mb-0";
	  DemoWelcomeP3.innerText = "Firstly, would you please tell if you are the parent of a child doing this experiment?";
	  DemoWelcomeDiv.appendChild(DemoWelcomeP3);
  
	  var DemoIsParentDiv = document.createElement("span");
	  DemoIsParentDiv.id = "IsParentDiv";
	  DemoWelcomeDiv.appendChild(DemoIsParentDiv);
	  var ParYes = document.createElement("label");
	  ParYes.id = "YesPar";
	  ParYes.innerText = "Yes";
	  DemoIsParentDiv.appendChild(ParYes);
	  var IsParSec = document.createElement("input");
	  IsParSec.type = "checkbox";
	  IsParSec.id = "IsParSwitch";
	  IsParSec.value = 0;
	  IsParSec.setAttribute("data-on-text", "Yes");
	  IsParSec.setAttribute("data-off-text", "No");
	  IsParSec.setAttribute("checked", "false");
	  DemoIsParentDiv.appendChild(IsParSec);
	  var ParNo = document.createElement("label");
	  ParNo.id = "NoPar";
	  ParNo.innerText = "No";
	  DemoIsParentDiv.appendChild(ParNo);
  
	  var DemoCols = document.createElement("div");
	  DemoCols.className = "row d-flex align-self-center justify-content-center mt-1 pt-1 mb-1 pb-1";
	  DemographicSection.appendChild(DemoCols);
  
	  var DemoColLeftAge = document.createElement("div");
	  DemoColLeftAge.className = "col col-md-auto text-center mt-1";
	  DemoCols.appendChild(DemoColLeftAge);
  
	  var DemoColMid = document.createElement("div");
	  DemoColMid.className = "col col-md-auto text-center mt-1";
	  DemoCols.appendChild(DemoColMid);
  
  
	  var DemoColRight = document.createElement("div");
	  DemoColRight.className = "col col-md-auto text-center mt-1";
	  DemoCols.appendChild(DemoColRight);
  
	  var DemoSocEd = document.createElement("div");
	  DemoSocEd.className = "row d-flex align-self-center justify-content-center mt-1 pt-1 mb-1 pb-1";
	  DemographicSection.appendChild(DemoSocEd);
  
	  var DemoSocEdLeft = document.createElement("div");
	  DemoSocEdLeft.className = "col col-md-auto text-center mt-1";
	  DemoSocEd.appendChild(DemoSocEdLeft);
  
	  var DemoSocEdRight = document.createElement("div");
	  DemoSocEdRight.className = "col col-md-auto text-center mt-1";
	  DemoSocEd.appendChild(DemoSocEdRight);
  
	  var DemographicGroup1 = document.createElement("div");
	  DemographicGroup1.className = "btn-toolbar";
	  DemoColMid.appendChild(DemographicGroup1);
  
	  var DemographicGroup2 = document.createElement("div");
	  DemographicGroup2.className = "btn-toolbar";
	  DemoColRight.appendChild(DemographicGroup2);
  
	  var DemographicGroup3 = document.createElement("div");
	  DemographicGroup3.className = "btn-toolbar";
	  DemoSocEdLeft.appendChild(DemographicGroup3);
  
	  var DemographicGroup4 = document.createElement("div");
	  DemographicGroup4.className = "btn-toolbar";
	  DemoSocEdRight.appendChild(DemographicGroup4);
  
	  var GenderSection = document.createElement("div");
	  GenderSection.className = "GenderDropDown";
	  DemographicGroup1.appendChild(GenderSection);
	  var GenderButton = document.createElement("button");
	  GenderButton.className = "btn btn-secondary btn-sm dropdown-toggle mr-2 mb-1 pb-1";
	  GenderButton.type = "button";
	  GenderButton.id = "dropdownGenderButton";
	  GenderButton.setAttribute("data-toggle", "dropdown");
	  GenderButton.setAttribute("aria-haspopup", "true");
	  GenderButton.setAttribute("aria-expanded", "false");
	  GenderButton.innerText="Gender";
	  GenderSection.appendChild(GenderButton);
	  var GenderChoiceSection = document.createElement("div");
	  GenderChoiceSection.className = "dropdown-menu";
	  GenderChoiceSection.id = "Genderdropdown";
	  GenderChoiceSection.setAttribute("aria-exparia-labelledby", "dropdownMenuButton");
	  GenderSection.appendChild(GenderChoiceSection);
	  for(let i=0; i < Demographs[0].length; i++){
		  var GenderChoice = document.createElement("a");
		  GenderChoice.className = "dropdown-item";
		  GenderChoice.href = "#";
		  GenderChoice.id = "Gender" + "Choice" + i.toString();
		  GenderChoice.innerText = Demographs[0][i];
		  GenderChoiceSection.appendChild(GenderChoice);
	  }

	  var GenderChkMessage = document.createElement("div");
	  GenderChkMessage.className = "alert alert-primary";
	  GenderChkMessage.id = "GenderChkMessage";
	  GenderChkMessage.role = "alert";
	  DemoColMid.appendChild(GenderChkMessage);

	  var HandSection = document.createElement("div");
	  HandSection.className = "HandDropDown";
	  DemographicGroup1.appendChild(HandSection);
	  var HandButton = document.createElement("button");
	  HandButton.className = "btn btn-secondary btn-sm dropdown-toggle mb-2 pb-2 mr-2";
	  HandButton.type = "button";
	  HandButton.id = "dropdownHandButton";
	  HandButton.setAttribute("data-toggle", "dropdown");
	  HandButton.setAttribute("aria-haspopup", "true");
	  HandButton.setAttribute("aria-expanded", "false");
	  HandButton.innerText="Handedness";
	  HandSection.className = "AgeDropDown";
	  HandSection.appendChild(HandButton);
	  var HandChoiceSection = document.createElement("div");
	  HandChoiceSection.className = "dropdown-menu";
	  HandChoiceSection.id = "Handdropdown"
	  HandChoiceSection.setAttribute("aria-exparia-labelledby", "dropdownMenuButton");
	  HandSection.appendChild(HandChoiceSection);
	  for(let i=0; i < Demographs[1].length; i++){
		  var HandChoice = document.createElement("a");
		  HandChoice.className = "dropdown-item";
		  HandChoice.href = "#";
		  HandChoice.id = "Hand" + "Choice" + i.toString();
		  HandChoice.innerText = Demographs[1][i];
		  HandChoiceSection.appendChild(HandChoice);
	  }

	  var HandChkMessage = document.createElement("div");
	  HandChkMessage.className = "alert alert-primary";
	  HandChkMessage.id = "HandChkMessage";
	  HandChkMessage.role = "alert";
	  DemoColMid.appendChild(HandChkMessage);
  
	  var RaceSection = document.createElement("div");
	  RaceSection.className = "RaceDropDown";
	  DemographicGroup2.appendChild(RaceSection);
	  var RaceButton = document.createElement("button");
	  RaceButton.className = "btn btn-secondary btn-sm dropdown-toggle mb-2 pb-2 mr-2";
	  RaceButton.type = "button";
	  RaceButton.id = "dropdownRaceButton";
	  RaceButton.setAttribute("data-toggle", "dropdown");
	  RaceButton.setAttribute("aria-haspopup", "true");
	  RaceButton.setAttribute("aria-expanded", "false");
	  RaceButton.innerText="Race";
	  RaceSection.appendChild(RaceButton);
	  var RaceChoiceSection = document.createElement("div");
	  RaceChoiceSection.className = "dropdown-menu";
	  RaceChoiceSection.id = "Racedropdown";
	  RaceChoiceSection.setAttribute("aria-exparia-labelledby", "dropdownMenuButton");
	  RaceSection.appendChild(RaceChoiceSection);
	  for(let i=0; i < Demographs[2].length; i++){
		  var RaceChoice = document.createElement("a");
		  RaceChoice.className = "dropdown-item";
		  RaceChoice.href = "#";
		  RaceChoice.id = "Race" + "Choice" + i.toString();
		  RaceChoice.innerText = Demographs[2][i];
		  RaceChoiceSection.appendChild(RaceChoice);
	  }

	  var RaceChkMessage = document.createElement("div");
	  RaceChkMessage.className = "alert alert-primary";
	  RaceChkMessage.id = "RaceChkMessage";
	  RaceChkMessage.role = "alert";
	  DemoColRight.appendChild(RaceChkMessage);
  
	  var EthSection = document.createElement("div");
	  EthSection.className = "EthDropDown";
	  DemographicGroup2.appendChild(EthSection);
	  var EthButton = document.createElement("button");
	  EthButton.className = "btn btn-secondary btn-sm dropdown-toggle mb-2 pb-2 mr-2";
	  EthButton.type = "button";
	  EthButton.id = "dropdownEthButton";
	  EthButton.setAttribute("data-toggle", "dropdown");
	  EthButton.setAttribute("aria-haspopup", "true");
	  EthButton.setAttribute("aria-expanded", "false");
	  EthButton.innerText="Ethnicity";
	  EthSection.appendChild(EthButton);
	  var EthChoiceSection = document.createElement("div");
	  EthChoiceSection.className = "dropdown-menu";
	  EthChoiceSection.id = "Ethdropdown";
	  EthChoiceSection.setAttribute("aria-exparia-labelledby", "dropdownMenuButton");
	  EthSection.appendChild(EthChoiceSection);
	  for(let i=0; i < Demographs[3].length; i++){
		  var EthChoice = document.createElement("a");
		  EthChoice.className = "dropdown-item";
		  EthChoice.href = "#";
		  EthChoice.id = "Eth" + "Choice" + i.toString();
		  EthChoice.innerText = Demographs[3][i];
		  EthChoiceSection.appendChild(EthChoice);
	  }

	  var EthChkMessage = document.createElement("div");
	  EthChkMessage.className = "alert alert-primary";
	  EthChkMessage.id = "EthChkMessage";
	  EthChkMessage.role = "alert";
	  DemoColRight.appendChild(EthChkMessage);
  
  
	  var SocSection = document.createElement("div");
	  SocSection.className = "SocDropDown";
	  DemographicGroup3.appendChild(SocSection);
	  var SocButton = document.createElement("button");
	  SocButton.className = "btn btn-secondary btn-sm dropdown-toggle mb-2 pb-2 mr-2";
	  SocButton.type = "button";
	  SocButton.id = "dropdownSocButton";
	  SocButton.setAttribute("data-toggle", "dropdown");
	  SocButton.setAttribute("aria-haspopup", "true");
	  SocButton.setAttribute("aria-expanded", "false");
  
	  SocButton.innerText="How would you best describe your family’s economic situation currently?";
	  SocSection.appendChild(SocButton);
	  var SocChoiceSection = document.createElement("div");
	  SocChoiceSection.className = "dropdown-menu";
	  SocChoiceSection.id = "Socdropdown";
	  SocChoiceSection.setAttribute("aria-exparia-labelledby", "dropdownMenuButton");
	  SocSection.appendChild(SocChoiceSection);
	  for(let i=0; i < Demographs[4].length; i++){
		  var SocChoice = document.createElement("a");
		  SocChoice.className = "dropdown-item";
		  SocChoice.href = "#";
		  SocChoice.id = "Soc" + "Choice" + i.toString();
		  SocChoice.innerText = Demographs[4][i];
		  SocChoiceSection.appendChild(SocChoice);
	  }

	  var SocChkMessage = document.createElement("div");
	  SocChkMessage.className = "alert alert-primary";
	  SocChkMessage.id = "SocChkMessage";
	  SocChkMessage.role = "alert";
	  DemoSocEdLeft.appendChild(SocChkMessage);
  
	  var EdSection = document.createElement("div");
	  EdSection.className = "EdDropDown";
	  DemographicGroup4.appendChild(EdSection);
	  var EdButton = document.createElement("button");
	  EdButton.className = "btn btn-secondary btn-sm dropdown-toggle mb-2 pb-2 mr-2";
	  EdButton.type = "button";
	  EdButton.id = "dropdownEdButton";
	  EdButton.setAttribute("data-toggle", "dropdown");
	  EdButton.setAttribute("aria-haspopup", "true");
	  EdButton.setAttribute("aria-expanded", "false");
	  EdButton.innerText="What is the highest level of education you have achieved?";
	  EdSection.appendChild(EdButton);
	  var EdChoiceSection = document.createElement("div");
	  EdChoiceSection.className = "dropdown-menu";
	  EdChoiceSection.id = "Eddropdown";
	  EdChoiceSection.setAttribute("aria-exparia-labelledby", "dropdownMenuButton");
	  EdSection.appendChild(EdChoiceSection);
	  for(let i=0; i < Demographs[5].length; i++){
		  var EdChoice = document.createElement("a");
		  EdChoice.className = "dropdown-item";
		  EdChoice.href = "#";
		  EdChoice.id = "Ed" + "Choice" + i.toString();
		  EdChoice.innerText = Demographs[5][i];
		  EdChoiceSection.appendChild(EdChoice);
	  }

	  var EdChkMessage = document.createElement("div");
	  EdChkMessage.className = "alert alert-primary";
	  EdChkMessage.id = "EdChkMessage";
	  EdChkMessage.role = "alert";
	  DemoSocEdRight.appendChild(EdChkMessage);
  
	  var DBTable = document.createElement("div");
	  DBTable.className = "input-group date mb-2 pb-2";
	  DBTable.id = "datepicker";
	  DemoColLeftAge.appendChild(DBTable);
	  var DBDate = document.createElement("input");
	  DBDate.className = "form-control";
	  DBDate.id = 'dateOFbirth';
	  DBDate.type = 'text';
	  DBDate.placeholder = "Date of Birth"
	  DBTable.appendChild(DBDate);
	  var DBDataSpan = document.createElement("span");
	  DBDataSpan.className = "input-group-addon";
	  DBTable.appendChild(DBDataSpan);
	  var DBDataSpanChild = document.createElement("i");
	  DBDataSpanChild.className = "far fa-calendar-alt fa-3x";
	  DBTable.appendChild(DBDataSpanChild);
	  var DoBChkMessage = document.createElement("div");
	  DoBChkMessage.className = "alert alert-primary";
	  DoBChkMessage.id = "DoBChkMessage";
	  DoBChkMessage.role = "alert";
	  DemoColLeftAge.appendChild(DoBChkMessage);
  
  
  
	  DemoLangLeft_Native = document.createElement("div");
	  DemoLangLeft_Native.id = "DemoLangNative";
	  DemoLangLeft_Native.className = "col col-md-auto text-center mt-1";
  
	  ChkLangRight_Native = document.createElement("div");
	  ChkLangRight_Native.id = "DemoLangNativeChk";
	  ChkLangRight_Native.className = "col col-md-auto text-center mt-1";
  
	  var LanguageBox = document.createElement("div");
	  LanguageBox.className = "row d-flex text-center justify-content-md-center mb-1 pb-1";
	  DemographicSection.appendChild(LanguageBox);
	  var LanguageDiv = document.createElement("div");
	  LanguageDiv.className = "alert alert-success";
	  LanguageDiv.role = "alert";
	  LanguageBox.appendChild(LanguageDiv);
	  var LanguageBoxHead = document.createElement("h4");
	  LanguageBoxHead.className = "alert-heading";
	  LanguageBoxHead.innerText = "What is the subject native language?";
  
  
  //////////////Native Language///////////////
  
  
  var NativeLangQuerySection = document.createElement("div");
  NativeLangQuerySection.className = "row d-flex text-center justify-content-md-center mb-1 pb-1";
  LanguageDiv.appendChild(NativeLangQuerySection);
  
  var NativeLangSec = document.createElement("div");
  NativeLangSec.className = "col col-md-auto text-center mt-1";
  NativeLangSec.id = "NativeLangSec";
  NativeLangQuerySection.appendChild(NativeLangSec);
  
  var NativeLangDiv = document.createElement("div");
  NativeLangDiv.id = "NativeLangDiv";
  NativeLangSec.appendChild(NativeLangDiv);
  NativeLangDiv.style.textAlign = "left";
  var NativeLangBtn = document.createElement("button");
  NativeLangBtn.type = "button";
  NativeLangBtn.className = "btn btn-secondary btn-sm dropdown-toggle active";
  NativeLangBtn.id = "NativeLangBtn";
  NativeLangBtn.setAttribute("data-toggle", "dropdown");
  NativeLangBtn.setAttribute("aria-haspopup", "true");
  NativeLangBtn.setAttribute("aria-expanded", "false");
  NativeLangBtn.innerText="What is the subject's native language Language?";
  NativeLangDiv.appendChild(NativeLangBtn);
  
  var NativeLangMenu = document.createElement("div");
  NativeLangMenu.className = "dropdown-menu";
  NativeLangMenu.setAttribute("aria-exparia-labelledby", "dropdownMenuButton");
  NativeLangMenu.id = "NativeLangMenu";
  NativeLangDiv.appendChild(NativeLangMenu);
  
  for(let i = 0; i < LangLbl.length; i++) {
	  var lengLink = document.createElement("a");
	  lengLink.className = "dropdown-item";
	  lengLink.href = "#";
	  lengLink.id = "WhcNtvLang";
	  NativeLangMenu.appendChild(lengLink);
	  var lengLinkSpan = document.createElement("span");
	  lengLinkSpan.className = "lang-xs lang-lbl-en";
	  lengLinkSpan.lang = LangLbl[i];
	  lengLinkSpan.id = "WhcNtvLnG" + LangLbl[i];
	  lengLink.appendChild(lengLinkSpan);
  }
  
  //// Native Lng Checker////////////
  
  var NativeChkSec = document.createElement("div");
  NativeChkSec.className = "col col-md-auto text-center mt-1";
  NativeChkSec.id = "NativeChkSec";
  NativeLangQuerySection.appendChild(NativeChkSec);
  
  var NativeChkMessage = document.createElement("div");
  NativeChkMessage.className = "alert alert-primary";
  NativeChkMessage.id = "NativeLngCheckMessage";
  NativeChkMessage.role = "alert";
  NativeChkSec.appendChild(NativeChkMessage);
  
  
  
	  /////////////Other Language Alerts/////////////////////
  
	  var OtherLanguageDiv = document.createElement("div");
	  OtherLanguageDiv.className = "row d-flex text-center justify-content-md-center mb-1 pb-1";
	  DemographicSection.appendChild(OtherLanguageDiv);
	  var OtherLanguageBox = document.createElement("div");
	  OtherLanguageBox.id = "OtherLanguageBox";
	  OtherLanguageBox.className = "alert alert-success";
	  OtherLanguageBox.role = "alert";
	  OtherLanguageDiv.appendChild(OtherLanguageBox);
	  var OtherLanguageBoxHead = document.createElement("h4");
	  OtherLanguageBoxHead.className = "alert-heading";
	  OtherLanguageBoxHead.innerText = "Which other languages does the subject speak?";
	  OtherLanguageBox.appendChild(OtherLanguageBoxHead);
  
	  var hrlng = document.createElement("hr");
	  OtherLanguageBox.appendChild(hrlng);
	  var OtherLanguageMessage1 = document.createElement("p");
	  OtherLanguageMessage1.className = "mb-0";
	  OtherLanguageMessage1.innerText = "Please use the buttons on the left below" + "\n" + "Please choose the language from the button above" + "\n" + "Then use the below button to choose the level of the proficiency." + "\n" + "Thanks!";
	  OtherLanguageBox.appendChild(OtherLanguageMessage1);
  
  
	  ///////////////Other Languages//////////	
  
	  var hrothlng = document.createElement("hr");
	  OtherLanguageBox.appendChild(hrothlng);
	  var OtherLanguageRow = document.createElement("div");
	  OtherLanguageRow.className = "row d-flex justify-content-md-start mb-1 pb-1";
	  OtherLanguageRow.id = "OtherLanguageRow";
	  OtherLanguageBox.appendChild(OtherLanguageRow);
  
  
  
	  var OthLngQSBoxMain = document.createElement("div");
	  OthLngQSBoxMain.className = "col col-md-auto text-center mt-1 mb-1 ml-1 pl-1";
	  OthLngQSBoxMain.id = "OthLngQSBoxMain";
	  OtherLanguageRow.appendChild(OthLngQSBoxMain);
  
	  var OthLngQSBoxCheckRests = document.createElement("div");
	  OthLngQSBoxCheckRests.className = "col col-md-auto text-center ml-1 pl-1 mt-1";
	  OthLngQSBoxCheckRests.id = "OthLngQSBoxCheckRests";
	  OtherLanguageRow.appendChild(OthLngQSBoxCheckRests);
  
	  var OthLngQSBoxCheckRestsCnTnr = document.createElement("div");
	  OthLngQSBoxCheckRestsCnTnr.className = "row d-flex justify-content-md-start mb-1 pb-1";
	  OthLngQSBoxCheckRestsCnTnr.id = "OthLngQSBoxCheckRestsCnTnr";
	  OthLngQSBoxCheckRests.appendChild(OthLngQSBoxCheckRestsCnTnr);
  
  
	  var OthLngQSBtnDiv = document.createElement("div");
	  OthLngQSBtnDiv.id = "OthLngQSBtnDiv";
	  OthLngQSBoxMain.appendChild(OthLngQSBtnDiv);
	  OthLngQSBtnDiv.style.textAlign = "left";
	  var OthLngQSBtn = document.createElement("button");
	  OthLngQSBtn.type = "button";
	  OthLngQSBtn.className = "btn btn-secondary btn-sm mb-2 pb-2 dropdown-toggle active";
	  OthLngQSBtn.id = "OthLngQSBtn";
	  OthLngQSBtn.setAttribute("data-toggle", "dropdown");
	  OthLngQSBtn.setAttribute("aria-haspopup", "true");
	  OthLngQSBtn.setAttribute("aria-expanded", "false");
	  OthLngQSBtn.innerText="Which Language?";
	  OthLngQSBoxMain.appendChild(OthLngQSBtn);
	  
	  var OthLngQSBtnMenu = document.createElement("div");
	  OthLngQSBtnMenu.className = "dropdown-menu";
	  OthLngQSBtnMenu.setAttribute("aria-exparia-labelledby", "dropdownMenuButton");
	  OthLngQSBtnMenu.id = "OthLngQSBtnMenu";
	  OthLngQSBoxMain.appendChild(OthLngQSBtnMenu);
	  
  
	  for(let i = 0; i < LangLbl.length; i++) {
		  var lengLink = document.createElement("a");
		  lengLink.className = "dropdown-item";
		  lengLink.href = "#";
		  lengLink.id = "WhcOthLang" + LangLbl[i];
		  OthLngQSBtnMenu.appendChild(lengLink);
		  var lengLinkSpan = document.createElement("span");
		  lengLinkSpan.className = "lang-xs lang-lbl-en";
		  lengLinkSpan.lang = LangLbl[i];
		  lengLinkSpan.id = "WhcOthLangSpn" + LangLbl[i];
		  lengLink.appendChild(lengLinkSpan);
	  }
  
	  let LngPrfArr = ["Basic", "intermediate", "Advance"];
	  var LngPrfDropDown = document.createElement("div");
	  LngPrfDropDown.className = "LngPrfDropDown";
	  OthLngQSBoxMain.appendChild(LngPrfDropDown);
	  LngPrfDropDown.style.textAlign = "left";
	  var LngPrfButton = document.createElement("button");
	  LngPrfButton.className = "btn btn-secondary btn-sm mt-1 pt-1 dropdown-toggle mr-2";
	  LngPrfButton.type = "button";
	  LngPrfButton.id = "LngPrfButton";
	  LngPrfButton.setAttribute("data-toggle", "dropdown");
	  LngPrfButton.setAttribute("aria-haspopup", "true");
	  LngPrfButton.setAttribute("aria-expanded", "false");
	  LngPrfButton.innerText="Proficiency";
	  LngPrfDropDown.appendChild(LngPrfButton);
	  var LngPrfChoiceSection = document.createElement("div");
	  LngPrfChoiceSection.className = "dropdown-menu";
	  LngPrfChoiceSection.id = "LngPrfdropdown";
	  LngPrfChoiceSection.setAttribute("aria-exparia-labelledby", "dropdownMenuButton");
	  LngPrfDropDown.appendChild(LngPrfChoiceSection);
	  for(let i=0; i < LngPrfArr.length; i++){
		  var LngPrfChoice = document.createElement("a");
		  LngPrfChoice.className = "dropdown-item";
		  LngPrfChoice.href = "#";
		  LngPrfChoice.id = `${LngPrfArr[i]}LngPrfChoice`;
		  LngPrfChoice.innerText = LngPrfArr[i];
		  LngPrfChoiceSection.appendChild(LngPrfChoice);
	  }
  
	  var OthLngQSBoxCheckRests1Div0 = document.createElement("div");
	  OthLngQSBoxCheckRests1Div0.className = "col col-md-auto text-center ml-1 pl-1 mt-1";
	  OthLngQSBoxCheckRests1Div0.id = "OthLngQSBoxCheckRests1Div0";
	  OthLngQSBoxCheckRestsCnTnr.appendChild(OthLngQSBoxCheckRests1Div0);
  
  
	  var WhcOthLngChRest0 = document.createElement("div");
	  WhcOthLngChRest0.className = "alert alert-primary";
	  WhcOthLngChRest0.id = "WhcOthLngChRest0";
	  WhcOthLngChRest0.role = "alert";
	  OthLngQSBoxCheckRests1Div0.appendChild(WhcOthLngChRest0);
  
	  var WhcOthLngPrfChkRest0 = document.createElement("div");
	  WhcOthLngPrfChkRest0.className = "alert alert-primary";
	  WhcOthLngPrfChkRest0.id = "WhcOthLngPrfChkRest0";
	  WhcOthLngPrfChkRest0.role = "alert";
	  OthLngQSBoxCheckRests1Div0.appendChild(WhcOthLngPrfChkRest0);
  
	  var OthLngQSBoxCheckRests1Div1 = document.createElement("div");
	  OthLngQSBoxCheckRests1Div1.className = "col col-md-auto text-center ml-1 pl-1 mt-1";
	  OthLngQSBoxCheckRests1Div1.id = "OthLngQSBoxCheckRests1Div1";
	  OthLngQSBoxCheckRestsCnTnr.appendChild(OthLngQSBoxCheckRests1Div1);
  
  
	  var WhcOthLngChRest1 = document.createElement("div");
	  WhcOthLngChRest1.className = "alert alert-primary";
	  WhcOthLngChRest1.id = "WhcOthLngChRest1";
	  WhcOthLngChRest1.role = "alert";
	  OthLngQSBoxCheckRests1Div1.appendChild(WhcOthLngChRest1);
  
	  var WhcOthLngPrfChkRest1 = document.createElement("div");
	  WhcOthLngPrfChkRest1.className = "alert alert-primary";
	  WhcOthLngPrfChkRest1.id = "WhcOthLngPrfChkRest1";
	  WhcOthLngPrfChkRest1.role = "alert";
	  OthLngQSBoxCheckRests1Div1.appendChild(WhcOthLngPrfChkRest1);
  
  ////////
  
  var OthLngQSBoxCheckRests1Div2 = document.createElement("div");
  OthLngQSBoxCheckRests1Div2.className = "col col-md-auto text-center ml-1 pl-1 mt-1";
  OthLngQSBoxCheckRests1Div2.id = "OthLngQSBoxCheckRests1Div2";
  OthLngQSBoxCheckRestsCnTnr.appendChild(OthLngQSBoxCheckRests1Div2);
  
  
  var WhcOthLngChRest2 = document.createElement("div");
  WhcOthLngChRest2.className = "alert alert-primary";
  WhcOthLngChRest2.id = "WhcOthLngChRest2";
  WhcOthLngChRest2.role = "alert";
  OthLngQSBoxCheckRests1Div2.appendChild(WhcOthLngChRest2);
  
  var WhcOthLngPrfChkRest2 = document.createElement("div");
  WhcOthLngPrfChkRest2.className = "alert alert-primary";
  WhcOthLngPrfChkRest2.id = "WhcOthLngPrfChkRest2";
  WhcOthLngPrfChkRest2.role = "alert";
  OthLngQSBoxCheckRests1Div2.appendChild(WhcOthLngPrfChkRest2);
  ////////
  
  
  var OthLngQSBoxCheckRests1Div3 = document.createElement("div");
  OthLngQSBoxCheckRests1Div3.className = "col col-md-auto text-center ml-1 pl-1 mt-1";
  OthLngQSBoxCheckRests1Div3.id = "OthLngQSBoxCheckRests1Div3";
  OthLngQSBoxCheckRestsCnTnr.appendChild(OthLngQSBoxCheckRests1Div3);
  
  
  var WhcOthLngChRest3 = document.createElement("div");
  WhcOthLngChRest3.className = "alert alert-primary";
  WhcOthLngChRest3.id = "WhcOthLngChRest3";
  WhcOthLngChRest3.role = "alert";
  OthLngQSBoxCheckRests1Div3.appendChild(WhcOthLngChRest3);
  
  var WhcOthLngPrfChkRest3 = document.createElement("div");
  WhcOthLngPrfChkRest3.className = "alert alert-primary";
  WhcOthLngPrfChkRest3.id = "WhcOthLngPrfChkRest3";
  WhcOthLngPrfChkRest3.role = "alert";
  OthLngQSBoxCheckRests1Div3.appendChild(WhcOthLngPrfChkRest3);
  ////////
  
  
  var OthLngQSBoxCheckRests1Div4 = document.createElement("div");
  OthLngQSBoxCheckRests1Div4.className = "col col-md-auto text-center ml-1 pl-1 mt-1";
  OthLngQSBoxCheckRests1Div4.id = "OthLngQSBoxCheckRests1Div4";
  OthLngQSBoxCheckRestsCnTnr.appendChild(OthLngQSBoxCheckRests1Div4);
  
  
  var WhcOthLngChRest4 = document.createElement("div");
  WhcOthLngChRest4.className = "alert alert-primary";
  WhcOthLngChRest4.id = "WhcOthLngChRest4";
  WhcOthLngChRest4.role = "alert";
  OthLngQSBoxCheckRests1Div4.appendChild(WhcOthLngChRest4);
  
  var WhcOthLngPrfChkRest4 = document.createElement("div");
  WhcOthLngPrfChkRest4.className = "alert alert-primary";
  WhcOthLngPrfChkRest4.id = "WhcOthLngPrfChkRest4";
  WhcOthLngPrfChkRest4.role = "alert";
  OthLngQSBoxCheckRests1Div4.appendChild(WhcOthLngPrfChkRest4);
  
  var SubmitDemoBtn = document.createElement("div");
  DemographicSection.appendChild(SubmitDemoBtn);
  var SubButton = document.createElement("button");
  SubButton.className = "btn btn-primary mt-1 pt-1";
  SubButton.type = "button";
  SubButton.id = "SubmitDemoBtn";
  SubButton.innerText = "Submit"
  SubmitDemoBtn.appendChild(SubButton);
  
  return DemographicSection
  }
  
  
  /*function Checking() {
	  var CheckingSection = document.createElement("div");
	  CheckingSection.className = "container-fluid";
	  CheckingSection.id = "CheckDiv";
	  insertAfter(document.getElementById("DemoDiv"), CheckingSection);
	  var CheckingBox = document.createElement("div");
	  CheckingBox.className = "row d-flex align-self-center justify-content-center mt-3 pt-1 mb-0 pb-0";
	  CheckingSection.appendChild(CheckingBox);
	  for(let i=0; i < info2chk.length; i++){
		  var AlertDiv = document.createElement("div");
		  AlertDiv.className = "alert alert-primary";
		  AlertDiv.id = `${info2chk[i]}CheckMessage`;
		  AlertDiv.role = "alert";
		  AlertDiv.style.width = "800px";
		  AlertDiv.style.margin = "0 auto;";
		  CheckingBox.appendChild(AlertDiv);
	  }
  }*/
  
	  let AgePerMonth = 0;
  
	  function getAge(dobObject) {
		  var now = new Date();
  
  
		  var yearNow = now.getYear();
		  var monthNow = now.getMonth();
		  var dateNow = now.getDate();
  
		  var dob = dobObject;
  
		  var yearDob = dob.getYear();
		  var monthDob = dob.getMonth();
		  var dateDob = dob.getDate();
		  var age = {};
  
  
		  yearAge = yearNow - yearDob;
  
		  if (monthNow >= monthDob)
			  var monthAge = monthNow - monthDob;
		  else {
			  yearAge--;
			  var monthAge = 12 + monthNow - monthDob;
		  }
  
		  if (dateNow >= dateDob)
			  var dateAge = dateNow - dateDob;
		  else {
			  monthAge--;
			  var dateAge = 31 + dateNow - dateDob;
  
			  if (monthAge < 0) {
				  monthAge = 11;
				  yearAge--;
			  }
		  }
  
		  AgePerMonth = (yearAge*365 + monthAge*31 + dateAge)/365;
  
		  age = {
			  years: yearAge,
			  months: monthAge,
			  days: dateAge
		  };
  
			  //return age;
			  return AgePerMonth;
		  }
  

	  let CanGotoExp = false
		  function DemographsInsert() {
			  let GoRno;
			  $("#SubmitDemoBtn").click(function() {
				  console.log(SubjectDemographicArray);
				  let GoNoGomessage = ["Have you checked your responses?"];
				  GoRno = confirm(GoNoGomessage);
				  if(GoRno) {
					InsertDemoInfo2DB(SubjectDemographicArray);
				  }
			  });
			  let DemoTitle = [
			  "IsParent", "Age", "Gender", "Hand", "Race", "Eth", "Soc", "Ed"
			  ];
  
			  $("#IsParSwitch").bootstrapSwitch();
  
			  $('#IsParSwitch').bootstrapSwitch('state', false);
			  
  
			  SubjectDemographicArray[0][1] = 0;
			  $('#IsParSwitch').on('switchChange.bootstrapSwitch', function () {
				  if($('#IsParSwitch').bootstrapSwitch('state')){
					  
					  SubjectDemographicArray[0][1] = 1;
				  }else if(!$('#IsParSwitch').bootstrapSwitch('state')) {	
					  SubjectDemographicArray[0][1] = 0;
				  }
  
			  });
  
  
			  $('#datepicker').datepicker();
			  $('#datepicker').on('changeDate', function() {
				  var dob = document.getElementById("dateOFbirth").value;
				  var DoFb = new Date(dob);
				  var AgE = getAge(DoFb);
				  console.log(AgE);
				  SubjectDemographicArray[1][1] = dob;
				  SubjectDemographicArray[11][1] = AgE;
				  document.getElementById("DoBChkMessage").innerText = dob;
  
			  });
  
			  $(`#dropdown${DemoTitle[2]}Button`).on('click', function(e) {
				  $(`#${DemoTitle[2]}dropdown a`).on('click', function(e) {
					  SubjectDemographicArray[2][1] = $(this).text();
					  document.getElementById("GenderChkMessage").innerText = "Gender: " + $(this).text();
  
				  });
			  });
			  $(`#dropdown${DemoTitle[3]}Button`).on('click', function(e) {
				  $(`#${DemoTitle[3]}dropdown a`).on('click', function(e) {
					  SubjectDemographicArray[3][1] = $(this).text();
					  document.getElementById("HandChkMessage").innerText = "Handedness: " + $(this).text();
				  });
			  });
			  $(`#dropdown${DemoTitle[4]}Button`).on('click', function(e) {
				  $(`#${DemoTitle[4]}dropdown a`).on('click', function(e) {
					  SubjectDemographicArray[4][1] = $(this).text();
					  document.getElementById("RaceChkMessage").innerText = "Race: " + $(this).text();
				  });
			  });
			  $(`#dropdown${DemoTitle[5]}Button`).on('click', function(e) {
				  $(`#${DemoTitle[5]}dropdown a`).on('click', function(e) {
					  SubjectDemographicArray[5][1] = $(this).text();
					  document.getElementById("EthChkMessage").innerText = "Ethnicity: " + $(this).text();
				  });
			  });
			  $(`#dropdown${DemoTitle[6]}Button`).on('click', function(e) {
				  $(`#${DemoTitle[6]}dropdown a`).on('click', function(e) {
					  SubjectDemographicArray[6][1] = $(this).text();
					  document.getElementById("SocChkMessage").innerText = $(this).text();  
				  });
			  });
			  $(`#dropdown${DemoTitle[7]}Button`).on('click', function(e) {
				  $(`#${DemoTitle[7]}dropdown a`).on('click', function(e) {
					  SubjectDemographicArray[7][1] = $(this).text();
					  document.getElementById("EdChkMessage").innerText = $(this).text();  
				  });
			  });
  ////////Set Nativee////////
  
  function addSpans2Bott(elm, lingo) {
	  $(`#${elm.id}`).text('');
	  elm.appendChild(document.createElement("span"));
	  $(`#${elm.id}`).find('span').attr('id', "MainLang");
	  $(`#${elm.id}`).find('span').addClass("lang-sm lang-lbl-en");
	  document.getElementById("MainLang").lang = lingo;
	  elm.appendChild(document.createElement("span"));
	  $(`#${elm.id}`).find('span').addClass("caret");
	  return elm
  }
  
  $("#NativeLangBtn").on('click', function(e) {
	  $("#NativeLangMenu a").on('click', function(e) {
		  var LangLink = this.children[0];
		  var LangID = LangLink.id;
		  var LangAbrvtn = document.getElementById(`${LangID}`).lang;
		  var langug = `${LangAbrvtn}`;
		  const element = document.querySelector("#NativeLangBtn");
		  addSpans2Bott(element, langug);
		  const mainLang = document.querySelector('#MainLang');
		  pseudoElementStyle = getComputedStyle(mainLang, '::after');
		  const NativeLanguage  = pseudoElementStyle.content;
		  document.getElementById("NativeLngCheckMessage").innerText = NativeLanguage;
		  SubjectDemographicArray[8][1] = NativeLanguage;
	  });
  });
  
  //////Design again////////	
  
  
  function addSpansToBott(elm, lingo) {
	  $(`#${elm.id}`).text('');
	  elm.appendChild(document.createElement("span"));
	  $(`#${elm.id}`).find('span').attr('id', "OtherLang");
	  $(`#${elm.id}`).find('span').addClass("lang-sm lang-lbl-en");
	  document.getElementById("OtherLang").lang = lingo;
	  elm.appendChild(document.createElement("span"));
	  $(`#${elm.id}`).find('span').addClass("caret");
	  return true
  }
  let ChoiceCount = 0;
  let howGos = false;
  $("#OthLngQSBtn").on('click', function(e) {
	  $("#OthLngQSBtnMenu a").on('click', function(e) {
		  var LangLink = this.children[0];
		  var LangID = LangLink.id;
		  var LangAbrvtn = document.getElementById(`${LangID}`).lang;
		  var langug = `${LangAbrvtn}`;
		  const element = document.querySelector("#OthLngQSBtn");
		  howGos = addSpansToBott(element, langug);
		  if(howGos) {
			  const otherLang = document.querySelector('#OtherLang');
			  pseudoElementStyle = getComputedStyle(otherLang, '::after');
			  const OtherLanguage  = pseudoElementStyle.content;
			  document.getElementById(`WhcOthLngChRest${ChoiceCount}`).innerText = OtherLanguage;
			  SubjectDemographicArray[9][1][ChoiceCount] = OtherLanguage;
  
		  }
	  });
	  if(howGos) {
		ChoiceCount++;
		}
  });
  
	  ////////Prificiency
  
	  let PrfChoiceCount = 0;
	  let howGosPrf = false;
  
  
	  $("#LngPrfButton").on('click', function(e) {
		  $("#LngPrfdropdown a").on('click', function(e) {
			  this.id;
			  console.log(this.id);
  
			  document.getElementById(`WhcOthLngPrfChkRest${PrfChoiceCount}`).innerText = $(this).text();
			  SubjectDemographicArray[10][1][PrfChoiceCount] = $(this).text();
			  howGosPrf = true
  
		  });
		  if(howGosPrf) {
			PrfChoiceCount++;
		  }
	  });
	}
  /////End Of Function/////////

  async function InsertDemoInfo2DB(SubjDemoInfo) {
	let email = SubjDemoInfo[12][1];
	  let sid = SubjDemoInfo[13][1];
	  let isParent = SubjDemoInfo[0][1];
	  let DoB = SubjDemoInfo[1][1];
	  let age = SubjDemoInfo[11][1];
	  let gender = SubjDemoInfo[2][1];
	  let hand = SubjDemoInfo[3][1];
	  let race = SubjDemoInfo[4][1];
	  let ethn = SubjDemoInfo[5][1];
	  let soc = SubjDemoInfo[6][1];
	  let edu = SubjDemoInfo[7][1];
	  let NL = SubjDemoInfo[8][1];
	  let OL1 = SubjDemoInfo[9][1][0];
	  let LP1 = SubjDemoInfo[10][1][0];
	  let OL2 = SubjDemoInfo[9][1][1];
	  let LP2 = SubjDemoInfo[10][1][1];
	  let OL3 = SubjDemoInfo[9][1][2];
	  let LP3 = SubjDemoInfo[10][1][2];
	  let OL4 = SubjDemoInfo[9][1][3];
	  let LP4 = SubjDemoInfo[10][1][3];
	  let OL5 = SubjDemoInfo[9][1][4];
	  let LP5 = SubjDemoInfo[10][1][4];
  
	  const user_demos = { email, sid, isParent, DoB, age, gender, hand, race, ethn, soc, edu, NL, OL1, LP1, OL2, LP2, OL3, LP3, OL4, LP4, OL5, LP5 };
	  const options = {
		  method: 'POST',
		  headers: {
			  'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(user_demos)
	  };
	  const end_feedbk = await fetch('/MD/LEVEL2/Credentials/usersDemo', options);
	  const ifOK_feedbk = await end_feedbk.json();
  
	  if(ifOK_feedbk.status == "done") {
		  alert("Ok everything finished. Welcome to the game!");
		  console.log("perfetto");
		  document.body.innerHTML = '';
		document.body.style.backgroundColor = "rgb(128,128,128)";
		StartMD();
	  }
  }
  
  
  
  let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  function DrawFixation(cross) {
	  let CrossBlock = document.createElement("section");
	  CrossBlock.id = "CrossSection";
	  document.body.appendChild(CrossBlock);
	  let CrossDiv = document.createElement("div");
	  CrossDiv.id = "CrossDiv";
	  let CrossSpan = document.createElement("span");
	  CrossSpan.id = "fixation";
	  CrossDiv.appendChild(CrossSpan);
	  CrossSpan.prepend(cross);
	  CrossBlock.appendChild(CrossDiv);
	  this.id = CrossBlock.id;
  
  }
  function Insert() {
	  var InsertSection = document.createElement("div");
	  InsertSection.className = "container-fluid";
	  InsertSection.id = "InfoInsertDiv";
	  document.body.appendChild(InsertSection);
  
  
	  var InsertIdDiv = document.createElement("div");
	  InsertIdDiv.className = "row mt-5 align-items-center justify-content-center";
	  InsertSection.appendChild(InsertIdDiv);
	  var InsertIdCol = document.createElement("div");
	  InsertIdCol.className = "col-md-3 mt-5";
	  InsertIdDiv.appendChild(InsertIdCol);
	  var InsertIdMessageP = document.createElement("p");
	  InsertIdMessageP.className = "h4 mt-5 p-2 d-flex justify-content-center";
	  InsertIdCol.appendChild(InsertIdMessageP);
	  var InsertIdMessage = document.createTextNode("Please insert your email");
	  InsertIdMessageP.appendChild(InsertIdMessage);
	  var IDinsertBox = document.createElement("input");
	  IDinsertBox.type = "text";
	  IDinsertBox.className = "form-control d-flex justify-content-center";
	  IDinsertBox.id = "SubjEmail";
	  IDinsertBox.placeholder = "Email Here";
	  InsertIdCol.appendChild(IDinsertBox);
  
	  var InsertPassDiv = document.createElement("div");
	  InsertPassDiv.className = "row mt-1 align-items-center justify-content-center";
	  InsertSection.appendChild(InsertPassDiv);
	  var InsertPassCol = document.createElement("div");
	  InsertPassCol.className = "col-md-3 mt-1";
	  InsertPassDiv.appendChild(InsertPassCol);
	  var InsertPassMessageP = document.createElement("p");
	  InsertPassMessageP.className = "h4 mt-5 p-2 d-flex justify-content-center";
	  InsertPassCol.appendChild(InsertPassMessageP);
	  var InsertPassMessage = document.createTextNode("Please insert your ID");
	  InsertPassMessageP.appendChild(InsertPassMessage);
	  var PassinsertBox = document.createElement("input");
	  PassinsertBox.type = "text";
	  PassinsertBox.className = "form-control d-flex justify-content-center";
	  PassinsertBox.id = "SubjID";
	  PassinsertBox.placeholder = "ID Here";
	  InsertPassCol.appendChild(PassinsertBox);
  
  
	  var SubmitButtonDiv = document.createElement("div");
	  SubmitButtonDiv.className = "h5 p-md-4 w-30 d-flex justify-content-center";
	  var SubmitButton = document.createElement("button");
	  SubmitButton.type = "button";
	  SubmitButton.id = "submit";
	  SubmitButton.className = "btn btn-primary";
	  SubmitButtonDiv.appendChild(SubmitButton);
	  InsertPassCol.appendChild(SubmitButtonDiv);
	  var SubmitMessage = document.createTextNode("SUBMIT");
	  SubmitButton.appendChild(SubmitMessage);
	  this.id = InsertSection.id
  }
  
  function InstructionText(text) {
	  var InstructionSection = document.createElement("div");
	  InstructionSection.className = "container-fluid";
	  InstructionSection.id = "InstructionSection";
	  document.body.appendChild(InstructionSection);
	  var InstructionDiv = document.createElement("div");
	  InstructionDiv.className = "row mt-5 align-items-center justify-content-center";
	  InstructionSection.appendChild(InstructionDiv);
	  var InstructionCol = document.createElement("div");
	  InstructionCol.className = "row";
	  InstructionDiv.appendChild(InstructionCol);
	  var InstructionText = document.createElement("h4");
	  InstructionText.className = "h4 mt-5 p-2 d-flex justify-content-center";
	  InstructionText.id = "InstructionText";
	  InstructionText.textContent = text;
	  InstructionCol.appendChild(InstructionText);
	  return InstructionSection
  }
  
  function StimBox(level,WhichCell) {
	  let CellArray = []
	  let row;
	  let col;
	  if(level == 2) {
		  row = 3;
		  col = 4;
	  }
	  for (let index1 = 0; index1 < row; index1++) {
		  CellArray[index1] = [];
	  }
	  var BoxStim = document.createElement("div");
	  for (let index1 = 0; index1 < row; index1++) {
		  var BoxRow = document.createElement("div");
		  BoxRow.className = "row h-10 m-10 align-self-center justify-content-center";
		  BoxStim.appendChild(BoxRow);
		  for (let index2 = 0; index2 < col; index2++) {
			  var OneBoxCol = document.createElement("div");
			  OneBoxCol.className = "p-5 h-10 w-10";
			  OneBoxCol.style.backgroundColor = "rgb(255,255,255)";
			  if(index1 == 0) {
				  if(index2 == 0) {
					  OneBoxCol.style.borderLeft = "6px solid black";
					  OneBoxCol.style.borderTop = "6px solid black";
					  OneBoxCol.style.borderBottom = "3px solid black";
					  OneBoxCol.style.borderRight = "3px solid black";
				  }
				  else if(index2 == 3) {
					  OneBoxCol.style.borderLeft = "3px solid black";
					  OneBoxCol.style.borderTop = "6px solid black";
					  OneBoxCol.style.borderBottom = "3px solid black";
					  OneBoxCol.style.borderRight = "6px solid black";
				  }
				  else {
					  OneBoxCol.style.borderLeft = "3px solid black";
					  OneBoxCol.style.borderTop = "6px solid black";
					  OneBoxCol.style.borderBottom = "3px solid black";
					  OneBoxCol.style.borderRight = "3px solid black";
				  }
			  }
			  else if(index1 == 2) {
				  if(index2 == 0) {
					  OneBoxCol.style.borderLeft = "6px solid black";
					  OneBoxCol.style.borderTop = "3px solid black";
					  OneBoxCol.style.borderBottom = "6px solid black";
					  OneBoxCol.style.borderRight = "3px solid black";
				  }
				  else if(index2 == 3) {
					  OneBoxCol.style.borderLeft = "3px solid black";
					  OneBoxCol.style.borderTop = "3px solid black";
					  OneBoxCol.style.borderBottom = "6px solid black";
					  OneBoxCol.style.borderRight = "6px solid black";
				  }
				  else {
					  OneBoxCol.style.borderLeft = "3px solid black";
					  OneBoxCol.style.borderTop = "3px solid black";
					  OneBoxCol.style.borderBottom = "6px solid black";
					  OneBoxCol.style.borderRight = "3px solid black";
				  }
			  }
			  else {
				  if(index2 == 0) {
					  OneBoxCol.style.borderLeft = "6px solid black";
					  OneBoxCol.style.borderTop = "3px solid black";
					  OneBoxCol.style.borderBottom = "3px solid black";
					  OneBoxCol.style.borderRight = "3px solid black";
				  }
				  else if(index2 == 3) {
					  OneBoxCol.style.borderLeft = "3px solid black";
					  OneBoxCol.style.borderTop = "3px solid black";
					  OneBoxCol.style.borderBottom = "3px solid black";
					  OneBoxCol.style.borderRight = "6px solid black";
				  }
				  else {
					  OneBoxCol.style.borderLeft = "3px solid black";
					  OneBoxCol.style.borderTop = "3px solid black";
					  OneBoxCol.style.borderBottom = "3px solid black";
					  OneBoxCol.style.borderRight = "3px solid black";
				  }
			  }
			  BoxRow.appendChild(OneBoxCol);
			  CellArray[index1].push(OneBoxCol);
		  }
	  }
	  for(let size1 = 0; size1 < WhichCell.length; size1++) {
  
		  for(let size2 = 0; size2 <  WhichCell[size1].length; size2++) {
			  let helper;
			  if((typeof WhichCell[size1][size2]) != "number") {
				  helper = WhichCell[size1][size2]
			  } else {
				  helper = WhichCell[size1];
			  }
			  CellArray[helper[0]][helper[1]].style.backgroundColor = "rgb(0,0,205)";
		  }
	  }
	  return BoxStim;
  }
  
  function InstructWithBox(message,level,WhichCell, boxID) {
	  var OneBoxSection = document.createElement("div");
	  OneBoxSection.className = "container-fluid";
	  OneBoxSection.id = "OneBoxSection";
	  document.body.appendChild(OneBoxSection);
	  var BoxHelper = document.createElement("div");
	  BoxHelper.className = "row mt-5 pt-5 mb-5 pb-4 align-self-center justify-content-center";
	  OneBoxSection.appendChild(BoxHelper);
	  var BoxMessage = document.createElement("h4");
	  BoxMessage.className = "larger";
	  BoxMessage.id = "boxmessage";
	  BoxMessage.textContent = message;
	  BoxHelper.appendChild(BoxMessage);
	  var BoxStimuli = StimBox(level,WhichCell);
	  BoxStimuli.id = boxID;
	  OneBoxSection.appendChild(BoxStimuli);
	  return OneBoxSection
  }
  
  function StimChoiceBox(instruct, arrleft, arrRight) {
	  var ChoiceBoxSection = document.createElement("div");
	  ChoiceBoxSection.className = "container-fluid";
	  ChoiceBoxSection.id = "ChoiceBoxSection";
	  document.body.appendChild(ChoiceBoxSection);
	  var ChoiceBoxHelper = document.createElement("div");
	  ChoiceBoxHelper.className = "row mt-5 pt-5 mb-5 pb-4 align-self-center justify-content-center";
	  ChoiceBoxHelper.id = "choiceboxhelper";
	  ChoiceBoxSection.appendChild(ChoiceBoxHelper);
	  var ChoiceBoxMessage = document.createElement("h4");
	  ChoiceBoxMessage.className = "larger";
	  ChoiceBoxMessage.id = "boxmessage";
	  ChoiceBoxMessage.textContent = instruct;
	  ChoiceBoxHelper.appendChild(ChoiceBoxMessage);
	  var ChoiceBoxDiv = document.createElement("div");
	  ChoiceBoxDiv.className = "row h-10 m-10 align-self-center justify-content-center";
	  ChoiceBoxDiv.id = "choiceboxdiv";
	  ChoiceBoxSection.appendChild(ChoiceBoxDiv);
	  var ChoiceBoxLeft = StimBox(2, arrleft);
	  ChoiceBoxLeft.id = "CBL";
	  ChoiceBoxLeft.className = "col padding"
	  ChoiceBoxDiv.appendChild(ChoiceBoxLeft);
	  var ChoiceBoxRight = StimBox(2, arrRight);
	  ChoiceBoxRight.id = "CBR";
	  ChoiceBoxRight.className = "col padding"
	  ChoiceBoxDiv.appendChild(ChoiceBoxRight);
	  return ChoiceBoxSection
  }
  
  function KeyBoardInstructionPanel(keyboard, instruction, handl, handr) {
	  var KeyBoardPanelSection = document.createElement("div");
	  KeyBoardPanelSection.className = "container-fluid";
	  KeyBoardPanelSection.id = "keypansec";
	  document.body.appendChild(KeyBoardPanelSection);
	  var KeyBoardPanelHelper = document.createElement("div");
	  KeyBoardPanelHelper.className = "row mt-5 pt-5 mb-5 pb-4 align-self-center justify-content-center";
	  KeyBoardPanelHelper.id = "keypansechelper";
	  KeyBoardPanelSection.appendChild(KeyBoardPanelHelper);
	  var KeyBoardPanelMessage = document.createElement("h4");
	  KeyBoardPanelMessage.className = "larger";
	  KeyBoardPanelMessage.id = "keypansecmsg";
	  KeyBoardPanelMessage.textContent = instruction;
	  KeyBoardPanelHelper.appendChild(KeyBoardPanelMessage);
	  var KeyboardSection = document.createElement("div");
	  KeyboardSection.className = "row h-10 m-10 align-self-center justify-content-center";
	  KeyboardSection.id = "keyboardsection";
	  KeyBoardPanelSection.appendChild(KeyboardSection);
	  KeyboardSection.appendChild(keyboard);
	  var HandSection = document.createElement("div");
	  HandSection.className = "row h-10 m-10 justify-content-between";
	  HandSection.id = "handsection";
	  KeyBoardPanelSection.appendChild(HandSection);
	  var HandLDiv = document.createElement("div");
	  HandLDiv.className = "col-md-3 d-flex justify-content-center";
	  HandLDiv.id = "HNDL";
	  HandSection.appendChild(HandLDiv);
	  handl.id = "handl";
	  HandLDiv.appendChild(handl);
	  document.getElementById(handl.id).style.height = "100%";
	  document.getElementById(handl.id).style.width = "90%";
	  var HandRDiv = document.createElement("div");
	  HandRDiv.className = "col-md-3 d-flex justify-content-center";
	  HandLDiv.id = "HNDR";
	  HandSection.appendChild(HandRDiv);
	  handr.id = "handr";
	  HandRDiv.appendChild(handr);
	  document.getElementById(handr.id).style.height = "100%";
	  document.getElementById(handr.id).style.width = "90%";
	  return KeyBoardPanelSection;
  }
  function ChoiceGenerator(RightBoxBlock1, RightBoxBlock2, RighBoxBlock, FalseBoxBlock, TimeSpan1, TimeSpan2, TimeSpan3, TimeSpan4) {
	  return new Promise(function(resolve) {
		  let answer;
		  let QuestionPanel1;
		  let QuestionPanel2;
		  
		  let Panel1 = RightBoxBlock1;
		  let Panel2 = RightBoxBlock2;
		  let correctAnswer;
		  let subResponse;
		  let WhichSide = [];
		  // 1 is Left // 0 is Right //
		  let Side = shuffle([0,1,2,3,4,5]);
		  let ZeroIndex = Side.findIndex(element => element == 0);
		  let OneIndex = Side.findIndex(element => element == 1);
		  if (ZeroIndex > OneIndex) {
			  WhichSide.push(0);
			  WhichSide.push(1);
		  } else {
			  WhichSide.push(1);
			  WhichSide.push(0);
		  }
		  let LeftSide = WhichSide[0];
		  let RightSide = WhichSide[1];
		  let QuestionBlock = [RighBoxBlock, FalseBoxBlock];
		  let LeftSideBlock = QuestionBlock[LeftSide];
		  let RightSideBlock = QuestionBlock[RightSide];
		  if(LeftSide == 0) {
			  correctAnswer = 1;
		  } else {
			  correctAnswer = 0;
		  }
		  QuestionPanel1 = InstructWithBox("",2,Panel1,"singlebox1");
		  wait(TimeSpan1).then(() => {
			  document.getElementById(QuestionPanel1.id).remove();
			  QuestionPanel2 = InstructWithBox("",2,Panel2,"singlebox2");
		  }).then(() => wait(TimeSpan2).then(() => {
			  document.getElementById(QuestionPanel2.id).remove();
		  })).then(() => wait(TimeSpan3).then(() => {
			  ChoicePanel = StimChoiceBox("", LeftSideBlock, RightSideBlock);
			  document.body.addEventListener('keypress', Eventhandler);
			  
		  })).then(() => wait(TimeSpan4).then(() => {
			  if(answer == correctAnswer) {
				  subResponse = 'correct';
				  resolve([subResponse, correctAnswer]);
				  
			  } else {
				  subResponse = 'wrong';
				  resolve([subResponse, correctAnswer]);
			  }
			  document.body.removeEventListener('keypress', Eventhandler);
			  document.getElementById(ChoicePanel.id).remove();
		  }));
		  function Eventhandler(event) {
			  if(event.code == "Digit1") {
				  answer = 1;
			  } else if(event.code == "Digit0") {
				  answer = 0;
			  }
		  }
	  })
  }
  
  function PracticePhase(VoiceArraY, RightChoiceBox1, RightChoiceBox2, RightChoiceBox, WrongChoiceBox) {
	  return new Promise(function(resolve) {
		  BlockIndex++;
		  ChoiceGenerator(RightChoiceBox1, RightChoiceBox2, RightChoiceBox, WrongChoiceBox, 1000, 1000, 1000, 3000)
		  .then(ResponsE => {
			  let feedback;
			  if (ResponsE[0] == 'correct' && ResponsE[1] == 1) {
				  feedback = InstructionText(GreatPress1);
				  // Great1
				  loadVoice(VoiceArraY[0]).then(voicedur => wait(voicedur*1000).then(() => {
					  document.getElementById(feedback.id).remove();
					  resolve();
				  }));
			  }else if(ResponsE[0] == 'correct' && ResponsE[1] == 0) {
				  feedback = InstructionText(GreatPress0);
				  // Great0
				  loadVoice(VoiceArraY[1]).then(voicedur => wait(voicedur*1000).then(() => {
					  document.getElementById(feedback.id).remove();
					  resolve();
				  }));
			  }else if(ResponsE[0] == 'wrong' || ResponsE.length == 0) {
				  feedback = InstructionText(OOpsAgain);
				  // oops
				  loadVoice(VoiceArraY[2]).then(voicedur => wait(voicedur*1000).then(() => {
					  document.getElementById(feedback.id).remove();
					  resolve();
				  }));
			  }
		  })
	  })
  }
  
  let difficulty = 2;
  let result;
  let answer;
  let ResponseStartTime = 0.0;
	let ResponseTime = 0.0;
	let ReactionTime = 0.0;
  function StimOrganizer(correctAnswer, WrongBlock, correctBlock, correctFirstBlock, correctSecondBlock) {
	  return new Promise(function(resolve) {
		  result = {};
		  let CorrectFirstBlock = [];
		  let CorrectSecondBlock = [];
		  for (let index = 0; index < correctFirstBlock.length; index++) {
			  CorrectFirstBlock.push(BlockCoordinate[correctFirstBlock[index]]);
			  CorrectSecondBlock.push(BlockCoordinate[correctSecondBlock[index]]);
		  }
		  let YesBlock = [];
		  let NoBlock = [];
		  for (let index1 = 0; index1 < WrongBlock.length; index1++) {
			  let Block1 = [];
			  let Block2 = [];
			  for (let index2 = 0; index2 < WrongBlock[index1].length; index2++) {
				  Block1.push(BlockCoordinate[correctBlock[index1][index2]]);
				  Block2.push(BlockCoordinate[WrongBlock[index1][index2]]);
			  }
			  YesBlock.push(Block1);
			  NoBlock.push(Block2);
		  }
  
		  let SingleStimBlockHowLong = 1000;
		  let Wait4ResponseHowLong = 4000;
		  let Wait4ChoicesHowLong = 500;
  
		  result.Difficulty = difficulty;
		  let QuestionPanel1;
		  let QuestionPanel2;
		  let subResponse = '';
		  let LeftSideBlock;
		  let RightSideBlock;
	  // 1 is Left // 0 is Right ///
	  if (correctAnswer == 1) {
		  result.CorrectSide = 'Left';
		  result.WrongSide = 'Right';
		  LeftSideBlock = YesBlock;
		  RightSideBlock = NoBlock;
	  } else {
		  result.CorrectSide = 'Right';
		  result.WrongSide = 'Left';
		  RightSideBlock = YesBlock;
		  LeftSideBlock = NoBlock;
	  }

	  StimIndex++;
	  QuestionPanel1 = InstructWithBox("",2,CorrectFirstBlock,"singlebox1");
	  wait(SingleStimBlockHowLong).then(() => {
		  document.getElementById(QuestionPanel1.id).remove();
		  QuestionPanel2 = InstructWithBox("",2,CorrectSecondBlock,"singlebox2");
	  }).then(() => wait(SingleStimBlockHowLong).then(() => {
		  document.getElementById(QuestionPanel2.id).remove();
	  })).then(() => wait(Wait4ChoicesHowLong).then(() => {
			answer = null;
		  ChoicePanel = StimChoiceBox("", LeftSideBlock, RightSideBlock);
		  document.body.addEventListener('keypress', Eventhandler);
		  ResponseStartTime = Date.now();
	  })).then(() => wait(Wait4ResponseHowLong).then(() => {
		document.body.removeEventListener('keypress', Eventhandler);
		document.getElementById(ChoicePanel.id).remove();
		  if(answer != null) {
			  result.IfRespond = 'YES';
			  if(answer == correctAnswer) {
				result.subResponse = 'correct';
				  ReactionTime = ResponseTime - ResponseStartTime;
				  result.ReactTime = ReactionTime;
				  console.log(`Here the subject responded and the answer was correct which was ${correctAnswer} and the time when the trial started was ${ResponseStartTime} and the time when the subject responded was ${ResponseTime} and the reaction time was ${ReactionTime}.`);
				  resolve(result);
			  } else if(answer != correctAnswer){
				  result.subResponse = 'wrong';
				  ReactionTime = ResponseTime - ResponseStartTime;
				  result.ReactTime = ReactionTime;
				  console.log(`Here the subject responded and the answer was wrong while the correct answer was ${correctAnswer} and the time when the trial started was ${ResponseStartTime} and the time when the subject responded was ${ResponseTime} and the reaction time was ${ReactionTime}.`);
				  resolve(result);
			  }
		  } else {
			  result.IfRespond = 'NO';
			  result.subResponse = 'wrong';
			  result.ReactTime = 999999;
			  console.log('subject did not respond');
			  resolve(result);
		  }
	  }));
	  function Eventhandler(event) {
		if(event.code == "Digit1") {
			answer = 1;
			ResponseTime = Date.now();
		} else if(event.code == "Digit0") {
			answer = 0;
			ResponseTime = Date.now();
		}
	}
  })
  }
  let wHichoneMathes = new Audio("./MD-Voices/Final/WhichOneMatch.wav");
  let AnSwEr;
  let wHichSide;
  function trySome(CorrectBlock1, CorrectBlock2, CorrectBlock, FalseBlock, span1, span2, span3, span4) {
	  return new Promise(function(resolve) {
		  wHichSide = [];
  
		  AnSwEr = null;
		  let QuestionBlock = [];
		  let QuestionPanel2;
		  let QuestionPanel1;
		  let ChoicePanel;
		  let Side = shuffle([0,1,2,3,4,5]);
		  let ZeroIndex = Side.findIndex(element => element == 0);
		  let OneIndex = Side.findIndex(element => element == 1);
		  if (ZeroIndex > OneIndex) {
			  wHichSide.push(0);
			  wHichSide.push(1);
		  } else {
			  wHichSide.push(1);
			  wHichSide.push(0);
		  }
		  let LeftSide = wHichSide[0];
		  let RightSide = wHichSide[1];
		  QuestionBlock = [CorrectBlock, FalseBlock];
		  let LeftSideBlock = QuestionBlock[LeftSide];
		  let RightSideBlock = QuestionBlock[RightSide];
		  if(LeftSide == 0) {
			  correctAnswer = 1;
		  } else {
			  correctAnswer = 0;
		  }
		  QuestionPanel1 = InstructWithBox("",2,CorrectBlock1,"singlebox1");
		  wait(span1).then(() => {
			  document.getElementById(QuestionPanel1.id).remove();
			  QuestionPanel2 = InstructWithBox("",2,CorrectBlock2,"singlebox2");
		  }).then(() => wait(span2).then(() => {
			  document.getElementById(QuestionPanel2.id).remove();
		  })).then(() => wait(span3).then(() => {
			  ChoicePanel = StimChoiceBox(WhichMatch, LeftSideBlock, RightSideBlock);
			  wHichoneMathes.play();		
		  }));
		  wHichoneMathes.onended = () => {
			  document.body.addEventListener('keypress', TryEventhandler);
			  wait(span4).then(() => {
				  if(AnSwEr == correctAnswer) {
					  document.getElementById(ChoicePanel.id).remove();
					  subResponse = 'correct';
					  resolve([subResponse, correctAnswer]);
				  } else if(AnSwEr != correctAnswer) {
					  document.getElementById(ChoicePanel.id).remove();
					  subResponse = 'wrong';
					  resolve([subResponse, correctAnswer]);
				  }
			  })
		  }
  
		  function TryEventhandler(event) {
			  if(event.code == "Digit1") {
				  AnSwEr = 1;
			  } else if(event.code == "Digit0") {
				  AnSwEr = 0;
			  } else {
				  AnSwEr = null;
			  }
		  }
	  })
  }
  
  function loadVoice(voice) {
	  return new Promise(function(resolve) {
		  var voiceDuration = voice.duration;
		  voice.play();
		  resolve(voiceDuration);
	  });
  }
  
  //Coordinates of boxes
  let BlockCoordinate = [];
  let aux = 1
  BlockCoordinate[0] = [0,0];
  BlockCoordinate[1] = [0,1];
  BlockCoordinate[2] = [0,2];
  BlockCoordinate[3] = [0,3];
  BlockCoordinate[4] = [1,0];
  BlockCoordinate[5] = [1,1];
  BlockCoordinate[6] = [1,2];
  BlockCoordinate[7] = [1,3];
  BlockCoordinate[8] = [2,0];
  BlockCoordinate[9] = [2,1];
  BlockCoordinate[10] = [2,2];
  BlockCoordinate[11] = [2,3];
  ////////////
  
  function SeqGenerator(SquaresBlockRight, SquaresBlockFalse) {
	  let CellsRight = [];
	  let CellsFalse = [];
	  for (let index1 = 0; index1 < SquaresBlockRight.length; index1++) {
		  let BoxRight = [];
		  let BoxFalse = [];
		  for (let index2 = 0; index2 < SquaresBlockRight[index1].length; index2++) {
			  BoxRight.push(BlockCoordinate[SquaresBlockRight[index1][index2]]);
			  BoxFalse.push(BlockCoordinate[SquaresBlockFalse[index1][index2]]);
		  }
		  CellsRight.push(BoxRight);
		  CellsFalse.push(BoxFalse);
	  }
	  let Stimuli = [CellsRight, CellsFalse];
	  return Stimuli
  }
  
  let ExpSeq;
  async function RequestOfStim() {
	  const Please = { "MyRequest": "Please send my data" };
	  const options = {
		  method: 'POST',
		  headers: {
			  'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(Please)
	  };
	  const response = await fetch('/MD/LEVEL2/ExpSeq', options);
	  const json = await response.json();
	  ExpSeq = await JSON.parse(json);
	  LetsStartExp();
  };
  async function Results2Table(TableName, ResultsArray, status)  {
		
		  //TableName = Subject ID//
		  const MDExperiment = { TableName, ResultsArray, status };
		  const options = {
			  method: 'POST',
			  headers: {
				  'Content-Type': 'application/json'
			  },
			  body: JSON.stringify(MDExperiment)
		  };
		  const finishMes = await fetch('/MD/LEVEL2/ExpData', options);
		  const FinishMessage = await finishMes.json();
		  //const LastMessage = await JSON.parse(FinishMessage);
		  if(FinishMessage.status == "Receiving MD Level 2 Experiment Results with Success") {
			  EndofTheExp();
		  }
		  console.log(FinishMessage);
  
	  }
  
	  async function checkTheCredential(subinfo) {
		  const email = subinfo[0];
		  const id = subinfo[1];
		  const MDL2SubjInfo = { email, id };
		  const options = {
			  method: 'POST',
			  headers: {
				  'Content-Type': 'application/json'
			  },
			  body: JSON.stringify(MDL2SubjInfo)
		  };
		  const UsrAUTmessage = await fetch('/MD/LEVEL2/Credentials/authentication', options);
		  const UsrAUTfeedback = await UsrAUTmessage.json();
		  //const LastMessage = await JSON.parse(FinishMessage);
		  if(UsrAUTfeedback.status == "authenticated") {
			  alert('welcome');
			  SubjectDemographicArray[12][1] = email;
			  SubjectDemographicArray[13][1] = id;
			  document.body.innerHTML = '';
			  document.body.style.backgroundColor = "rgb(128,128,128)";
			  Demographics();
			  DemographsInsert();
		  }else if(UsrAUTfeedback.status == "notAuthenticated"){
			  alert('Sorry, you are not registered');
			  console.log(UsrAUTfeedback);
		  }else if(UsrAUTfeedback.status == "exists&completed"){
			alert('Sorry, you have already taken the experiment.');
			console.log(UsrAUTfeedback);
		}else if(UsrAUTfeedback.status == "NoIdea"){
			  alert('Sorry, something is going wrong. Please contact the researcher');
		  }
	  }
  
	  
  
	  const WelcomeMessage = "Hello! Welcome to the JUNIOR BRAIN SCIENTIST GAMES from the z-lab";
	  const Instruction1 = "For this game you will see blue blocks like this";
	  const Instruction2 = "after you see the first picture you’re going to see a second picture with blue blocks that will disappear, like this";
	  const Instruction3 = "Your goal is to remember where all the blue blocks you saw were.";
	  const Instruction4 = "After you see both groups of blocks, you will see two groups of squares on the screen";
	  const OneOnThis = "One on this side of the screen,";
	  const AndOneThis = "and one on the other side";
	  const YourJob = "Your job is to quickly push a button on the side that has all of the blue blocks you saw";
	  const PutOn1 = "Put this finger on 1!";
	  const PutOn0 = "Put this finger on 0!";
	  const Remember1stPic = "So, here’s the first picture again, remember where these blue squares are!";
	  const Remember2ndPic = "And here’s the second picture, remember where the last blue squares were and these blue squares are!";
	  const NowChoose = "Now choose the picture that has all of the blue blocks from the first two pictures:";
	  const IfThisPress1 = "If you think this side matches, press 1";
	  const IfThisPress0 = "If you think this side matches, press 0";
	  const ItsOk = "It’s okay if you don’t get it right, but do your best to pay attention and pick the match!";
	  const AfterChoiceAgain = "After you make your choice, you’ll start over with two new groups of squares."; 
	  const LetsTrySome = "Let’s try some!";
	  const OOpsAgain = "Oops! Try again!";
	  const GreatPress0 = "Yes, great job! You pressed 0 and picked the match!";
	  const RememberWhere = "Remember where the blue blocks are!";
	  const WhichMatch = "Which one matches?";
	  const GreatPress1 = "Yes, great job! You pressed 1 and picked the match!";
	  const WantPractice = "Do you want more practice? If so press SPACE!";
	  const Ready4Game = "Are you ready for the real game? Remember, if you try hard you will get a gift from z-lab! If you are ready press SPACE to start the game.";
	  const EndMessage = "You did great. Thanks for your participation!";
  
	  let SubjectID;
	  let InfoPage;
	  let permission = false;
  
	  $(document).ready(function() {
		  InfoPage = new Insert();
		  $("#submit").click(function() {
			  SubjectID = document.getElementById("SubjID").value;
			  SubjectEmail = document.getElementById("SubjEmail").value;
			  if(SubjectEmail == ''){
				  alert('Please enter your email');
			  }else if(SubjectID == '') {
				  alert('Please enter your ID');
			  }else {
				  checkTheCredential([SubjectEmail, SubjectID]);
			  }
		  })
	  })
	  let WelcomePage;
	  let helloAudio = new Audio("./MD-Voices/Final/hello.wav");
	  function StartMD() {
		  wait(350).then(() => {
			  WelcomePage = new InstructionText(WelcomeMessage);
			  helloAudio.play();
		  });
  
	  }
	  let SingleBox1_1;
	  let Cell1_1 = [];
	  let ForThisGame = new Audio("./MD-Voices/Final/ForThisGameThis.wav");
  
	  helloAudio.onended = () => {
		  helloAudio.pause();
		  wait(350).then(() => {
			  document.getElementById(WelcomePage.id).remove();
			  ForThisGame.play();
			  Cell1_1 = [[1,3], [2,3]];
			  SingleBox1_1 = InstructWithBox(Instruction1,2, Cell1_1,"singlebox1");
		  });
  
	  }
	  let SingleBox2_1;
	  let AfterLikeThis = new Audio("./MD-Voices/Final/AfterLikeThis.wav");
	  let Cell2_1 = [];
	  ForThisGame.onended = () => {
		  ForThisGame.pause();
		  wait(350).then(() => {
			  document.getElementById(SingleBox1_1.id).remove();
			  AfterLikeThis.play();
			  Cell2_1 = [[0,2], [0,3]];
			  SingleBox2_1 = InstructWithBox(Instruction2, 2, Cell2_1,"singlebox2");
			  wait(4500).then(() => {document.getElementById("singlebox2").remove();})
		  })
	  }
	  let YourGoal = new Audio("./MD-Voices/Final/YourGoal.wav");
	  let GoalMessagePage;
	  AfterLikeThis.onended = () => {
		  AfterLikeThis.pause();
		  wait(350).then(() => {
			  document.getElementById(SingleBox2_1.id).remove();
			  GoalMessagePage = InstructionText(Instruction3);
			  YourGoal.play();
		  })
	  }
  
	  let AfterTwoBoxesAudio = new Audio("./MD-Voices/Final/AfterTwoBox.wav");
	  let InstructChoiceBoxes;
	  let CorrectArrayRow1 = [];
	  let CorrectArrayRow2 = [];
	  let InstructArrayRow1 = [];
	  let InstructArrayRow2 = [];
	  let CorrectChoice;
	  let InstructChoice;
	  YourGoal.onended = () => {
		  YourGoal.pause();
		  wait(350).then(() => {
			  document.getElementById(GoalMessagePage.id).remove();
			  CorrectArrayRow1 = [[1,3], [2,3]];
			  CorrectArrayRow2 = [[0,2], [0,3]];
			  CorrectChoice = [CorrectArrayRow1, CorrectArrayRow2]
			  InstructArrayRow1 = [[0,0],[0,1]];
			  InstructArrayRow2 = [[1,0],[1,1]];
			  InstructChoice = [InstructArrayRow1, InstructArrayRow2];
			  InstructChoiceBoxes = StimChoiceBox(Instruction4, CorrectChoice, InstructChoice);
			  AfterTwoBoxesAudio.play();
  
		  })
	  }
	  
	  let OneOnThisSide = new Audio("./MD-Voices/Final/OneOnThisSide.wav");
	  AfterTwoBoxesAudio.onended = () => {
		  AfterTwoBoxesAudio.pause();
		  wait(350).then(() => {
			  document.getElementById(InstructChoiceBoxes.id).remove();
			  OneOnThisSide.play();
			  InstructChoiceBoxes1 = StimChoiceBox(OneOnThis, CorrectChoice, InstructChoice);
			  document.getElementById("CBR").style.visibility = "hidden";
			  wait(500).then(() => document.getElementById("CBL").style.visibility = "hidden")
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "visible"))
		  })
	  }
	  let OneOnOther = new Audio("./MD-Voices/Final/OneOnOther.wav");
	  OneOnThisSide.onended = () => {
		  OneOnThisSide.pause();
		  wait(350).then(() => {
			  document.getElementById(InstructChoiceBoxes1.id).remove();
			  OneOnOther.play();
			  InstructChoiceBoxes2 = StimChoiceBox(OneOnThis, CorrectChoice, InstructChoice);
			  document.getElementById("CBL").style.visibility = "hidden";
			  wait(500).then(() => document.getElementById("CBR").style.visibility = "hidden")
			  .then(() => wait(375).then(() => document.getElementById("CBR").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("CBR").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("CBR").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("CBR").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("CBR").style.visibility = "visible"))
		  })
	  }
  
	  let YourJobVoice = new Audio("./MD-Voices/Final/YourJob.wav");
	  OneOnOther.onended = () => {
		  OneOnOther.pause();
		  wait(750).then(() => {
			  document.getElementById(InstructChoiceBoxes2.id).remove();
			  YourJobVoice.play();
			  InstructChoiceBoxes3 = StimChoiceBox(YourJob, CorrectChoice, InstructChoice);
			  document.getElementById("CBR").style.visibility = "hidden";
			  wait(500).then(() => document.getElementById("CBL").style.visibility = "hidden")
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "visible"))
		  })
	  }
	  let Keyboard = new Image();
	  Keyboard.src = "./Image/Keybord.png";
	  let HandR = new Image();
	  HandR.src = "./Image/hand-press-button-R.png";
	  let HandL = new Image();
	  HandL.src = "./Image/hand-press-button-L.png";
	  let PutOnOne = new Audio("./MD-Voices/Final/Put1.wav");
	  YourJobVoice.onended = () => {
		  YourJobVoice.pause();
		  wait(750).then(() => {
			  document.getElementById(InstructChoiceBoxes3.id).remove();
			  PutOnOne.play();
			  KeyAndHandSection1 = KeyBoardInstructionPanel(Keyboard, PutOn1, HandL, HandR);
			  document.getElementById("handr").style.visibility = "hidden";
			  wait(200).then(() => document.getElementById("handl").style.visibility = "hidden")
			  .then(() => wait(375).then(() => document.getElementById("handl").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("handl").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("handl").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("handl").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("handl").style.visibility = "visible"));
		  })
	  }
	  let PutOnZero = new Audio("./MD-Voices/Final/Put0.wav");
	  PutOnOne.onended = () => {
		  PutOnOne.pause();
		  wait(1200).then(() => {
			  document.getElementById(KeyAndHandSection1.id).remove();
			  PutOnZero.play();
			  KeyAndHandSection2 = KeyBoardInstructionPanel(Keyboard, PutOn0, HandL, HandR);
			  document.getElementById("handl").style.visibility = "hidden";
			  wait(200).then(() => document.getElementById("handr").style.visibility = "hidden")
			  .then(() => wait(375).then(() => document.getElementById("handr").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("handr").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("handr").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("handr").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("handr").style.visibility = "visible"));
		  })
	  }
  
	  let Cell1 = [];
	  let SingleBox1;
	  let SoHereAgainRemember = new Audio("./MD-Voices/Final/SoHereAgainRemember.wav");
	  PutOnZero.onended = () => {
		  PutOnZero.pause();
		  wait(1000).then(() => {
			  document.getElementById(KeyAndHandSection2.id).remove();
			  SoHereAgainRemember.play();
			  Cell1 = [[1,3], [2,3]];
			  SingleBox1 = InstructWithBox(Remember1stPic,2, Cell1,"singlebox1");
		  })
	  }
  
	  let SingleBox2;
	  let HereRememberTheseAndLast = new Audio("./MD-Voices/Final/HereRememberTheseAndLast.wav");
	  let Cell2 = [];
	  SoHereAgainRemember.onended = () => {
		  SoHereAgainRemember.pause();
		  wait(1000).then(() => {
			  document.getElementById(SingleBox1.id).remove();
			  HereRememberTheseAndLast.play();
			  Cell2 = [[0,2], [0,3]];
			  SingleBox2 = InstructWithBox(Remember2ndPic, 2, Cell2,"singlebox2");
		  })
	  }
  
	  let ChooseThatHasAll= new Audio("./MD-Voices/Final/ChooseThatHasAll.wav");
	  let ReviewChoiceBoxes;
	  let ReviewCorrectChoice;
	  let ReviewInstructChoice;
	  HereRememberTheseAndLast.onended = () => {
		  HereRememberTheseAndLast.pause();
		  wait(350).then(() => {
			  document.getElementById(SingleBox2.id).remove();
			  ReviewCorrectChoice = [CorrectArrayRow1, CorrectArrayRow2]
			  ReviewInstructChoice = [InstructArrayRow1, InstructArrayRow2];
			  ReviewChoiceBoxes = StimChoiceBox(NowChoose, ReviewCorrectChoice, ReviewInstructChoice);
			  ChooseThatHasAll.play();
		  })
	  }
	  let ReviewInstructChoiceBoxes1;
	  let IfThisOne = new Audio("./MD-Voices/Final/IfThisOne.wav");
	  ChooseThatHasAll.onended = () => {
		  ChooseThatHasAll.pause();
		  wait(500).then(() => {
			  document.getElementById(ReviewChoiceBoxes.id).remove();
			  IfThisOne.play();
			  ReviewInstructChoiceBoxes1 = StimChoiceBox(IfThisPress1, ReviewCorrectChoice, ReviewInstructChoice);
			  document.getElementById("CBR").style.visibility = "hidden";
			  wait(1000).then(() => document.getElementById("CBL").style.visibility = "hidden")
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("CBL").style.visibility = "visible"))
		  })
	  }
  
	  let ReviewInstructChoiceBoxes2;
	  let IfThisZero = new Audio("./MD-Voices/Final/IfThis0.wav");
	  IfThisOne.onended = () => {
		  IfThisOne.pause();
		  wait(500).then(() => {
			  document.getElementById(ReviewInstructChoiceBoxes1.id).remove();
			  IfThisZero.play();
			  ReviewInstructChoiceBoxes2 = StimChoiceBox(IfThisPress0, ReviewCorrectChoice, ReviewInstructChoice);
			  document.getElementById("CBL").style.visibility = "hidden";
			  wait(1000).then(() => document.getElementById("CBR").style.visibility = "hidden")
			  .then(() => wait(375).then(() => document.getElementById("CBR").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("CBR").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("CBR").style.visibility = "visible"))
			  .then(() => wait(375).then(() => document.getElementById("CBR").style.visibility = "hidden"))
			  .then(() => wait(375).then(() => document.getElementById("CBR").style.visibility = "visible"))
		  })
	  }
  
	  let ItsOkVoice = new Audio("./MD-Voices/Final/ItsOkIf.wav");
	  let LetsTrySomE = new Audio("./MD-Voices/Final/LetsTrySome.wav");
	  let ItsOkMessage;
	  let AfterChoiceAgainMsg;
	  let LetsTryMsg;
	  IfThisZero.onended = () => {
		  IfThisZero.pause();
		  wait(750).then(() => {
			  document.getElementById(ReviewInstructChoiceBoxes2.id).remove();
			  ItsOkVoice.play();
			  ItsOkMessage = InstructionText(ItsOk);
			  wait(4750).then(() => AfterChoiceAgainMsg = InstructionText(AfterChoiceAgain));
			  ItsOkVoice.onended = () => {
				  wait(350).then(() => {
					  LetsTryMsg = InstructionText(LetsTrySome);
					  LetsTrySomE.play();
				  })
			  }
		  })
	  }
	  let RememberThese;
	  let TryRemember = new Audio("./MD-Voices/Final/RememberWhereR.wav");
	  LetsTrySomE.onended = () => {
		  LetsTrySomE.pause();
		  wait(1000).then(() => {
			  document.getElementById(ItsOkMessage.id).remove();
			  document.getElementById(AfterChoiceAgainMsg.id).remove();
			  document.getElementById(LetsTryMsg.id).remove();
			  TryRemember.play();
			  RememberThese = InstructionText(RememberWhere);
		  })
	  }
  
	  let LetsTrySquaresRight = [[6, 7, 2, 1], [11, 0, 3, 8], [11, 7, 8, 4], [0, 9, 11, 0]];
	  let LetsTrySquaresFalse = [[0, 9, 4, 2], [9, 4, 5, 3], [10, 1, 2, 4], [6, 4, 11, 2]];
	  let LetsTryCellsRight = [];
	  let LetsTryCellsFalse = [];
	  for (let index1 = 0; index1 < LetsTrySquaresRight.length; index1++) {
		  let BoxRight = [];
		  let BoxFalse = [];
		  for (let index2 = 0; index2 < LetsTrySquaresRight[index1].length; index2++) {
			  BoxRight.push(BlockCoordinate[LetsTrySquaresRight[index1][index2]]);
			  BoxFalse.push(BlockCoordinate[LetsTrySquaresFalse[index1][index2]]);
		  }
		  LetsTryCellsRight.push(BoxRight);
		  LetsTryCellsFalse.push(BoxFalse);
	  }
  
	  let ReSpoNse;
	  let tryindex = 0;
	  TryRemember.onended = () => {
		  TryRemember.pause();
		  wait(750).then(() => {
			  document.getElementById(RememberThese.id).remove();
			  tryPhase();
  
		  })
	  }
	  let wannaPractice;
	  let morePractice = new Audio("./MD-Voices/Final/DoMorePractice.wav");
	  function tryPhase() {
		  let VoiCe;
		  let RightBoxBlock1 = [LetsTryCellsRight[tryindex][0], LetsTryCellsRight[tryindex][1]];
		  let RightBoxBlock2 = [LetsTryCellsRight[tryindex][2], LetsTryCellsRight[tryindex][3]];
		  let RighBoxBlock = [RightBoxBlock1,RightBoxBlock2];
		  let FalseBoxBlock1 = [LetsTryCellsFalse[tryindex][0], LetsTryCellsFalse[tryindex][1]];
		  let FalseBoxBlock2 = [LetsTryCellsFalse[0][2], LetsTryCellsFalse[tryindex][3]];
		  let FalseBoxBlock = [FalseBoxBlock1,FalseBoxBlock2];
		  if(tryindex < LetsTryCellsRight.length-1) {
			  wait(150).then(() => {
				  trySome(RightBoxBlock1, RightBoxBlock2, RighBoxBlock, FalseBoxBlock, 1000, 1000, 1000, 1000)
				  .then(ReSpoNse => {
					  if (ReSpoNse[0] == 'correct' && ReSpoNse[1] == 1) {
						  VoiCe = FeedbackVoiceArray[0];
						  VoiCe.play();
					  } else if(ReSpoNse[0] == 'correct' && ReSpoNse[1] == 0) {
						  VoiCe = FeedbackVoiceArray[1];
						  VoiCe.play();
					  } else {
						  VoiCe = FeedbackVoiceArray[2];
						  VoiCe.play();
					  }
					  VoiCe.onended = () => {
						  tryindex++;
						  wait(1000).then(() => {
							  tryPhase();
						  })
					  }
				  });
			  })
  
		  } else if(tryindex == LetsTryCellsRight.length-1) {
			  wait(1000).then(() => {
				  morePractice.play();
				  wannaPractice = new InstructionText(WantPractice);
			  })
		  }
  
	  }
	  morePractice.onended = () => {
		  morePractice.pause();
		  document.addEventListener('keypress', MorePracticeHandler);
	  }
	  function MorePracticeHandler(event) {
		  if(event.code == "Space") {
			  morePractice.pause();
			  document.getElementById(wannaPractice.id).remove();
			  wait(350).then(() => {
				  LetsPractice();
			  })
		  }
	  }
  
	  let StimulusSeq = SeqGenerator(LetsTrySquaresRight, LetsTrySquaresFalse);
	  let oops = new Audio("./MD-Voices/Final/OppsAgain.wav");
	  let Great1 = new Audio("./MD-Voices/Final/YesPress1Pick.wav");
	  let Great0 = new Audio("./MD-Voices/Final/YesPick0.wav");
	  let FeedbackVoiceArray = [Great1, Great0, oops];
  
	  let RightIndex = 0;
	  let WrongIndex = 1;
	  let BlockIndex = 0;
  
	  let FeedBackVoiceArray = [Great1, Great0, oops];
	  let Ready4Real = new Audio("./MD-Voices/Final/ReadyRealGame.wav");
	  let ReadyMessage;
  
	  function LetsPractice() {
		  if(BlockIndex < StimulusSeq[RightIndex].length - 1) {
			  PracticePhase(FeedBackVoiceArray, [StimulusSeq[RightIndex][BlockIndex][0],StimulusSeq[RightIndex][BlockIndex][1]], [StimulusSeq[RightIndex][BlockIndex][2],StimulusSeq[RightIndex][BlockIndex][3]], StimulusSeq[RightIndex][BlockIndex], StimulusSeq[WrongIndex][BlockIndex])
			  .then(() => {
				  if(BlockIndex == StimulusSeq[RightIndex].length - 1) {
					  //wait(350).then(() => {
						  Ready4Real.play();
						  ReadyMessage = new InstructionText(Ready4Game);
					  //})
					  
				  } else {
					  //wait(350).then(() => {
						  LetsPractice();
					  //})
				  }
			  })
		  }
	  }
  
  
  
  
	  Ready4Real.onended = () => {
		  Ready4Real.pause();
		  document.addEventListener('keypress', ExpStartHandler);
	  }
	  function ExpStartHandler(event) {
		  if(event.code == "Space") {
			  console.log('Subject started experiment')
		  //document.getElementById(ReadyMessage.id).remove();
		  RequestOfStim();
	  }
  }
  
  let StimIndex = 0;
  let MDRESULT = [];
  
  function LetsStartExp() {
	  document.body.style.backgroundColor = "rgb(255, 255, 255)"
	  if(StimIndex < ExpSeq.length) {
		  if(ExpSeq[StimIndex] == 'Fixation') {
			  Cross = new DrawFixation("+");
			  wait(12000).then(() => {
				  document.getElementById(Cross.id).remove();
				  StimIndex++;
				  LetsStartExp();
			  }); 
		  }else {
			  StimOrganizer(ExpSeq[StimIndex].CorrectSide, ExpSeq[StimIndex].FalseBlock, ExpSeq[StimIndex].Stim, ExpSeq[StimIndex].StimFirstBlock, ExpSeq[StimIndex].StimSecondBlock)
			  .then(BlockResult => {
				  MDRESULT.push(BlockResult);
				  LetsStartExp();
			  })
		  }
	  } else if(StimIndex == ExpSeq.length) {
		let ExpStatus = 'completed';
		  console.log('The experiment has arrived to the end.');
		  console.log(MDRESULT)
		  Results2Table(SubjectID, MDRESULT, ExpStatus);
		  return
	  }
  }
  
  
  let TheEnd
  let TheEndVoice = new Audio("./MD-Voices/Final/GreatThanks.wav"); 
  function EndofTheExp() {
	  document.body.style.backgroundColor = "rgb(128,128,128)";
	  wait(750).then(() => {
		  TheEnd = new InstructionText(EndMessage);
		  TheEndVoice.play();
	  })
  }
  
  TheEndVoice.onended = () => {
	  TheEndVoice.pause();
	  document.getElementById(TheEnd.id).remove();
  }
  