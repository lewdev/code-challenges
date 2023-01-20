//Challenge: https://code.golf/pangram-grep#javascript
/*
<style>.print { padding: 1rem; border-bottom: 1px solid gray; }
</style>
<div id=o></div>
<script>// */

const arguments = [`msKCDbqt~RG~fypX}aWJZLi}nu|eOv`, `b{AtTLE oF {tHERvOpYLae: QuI{ck ~jAVeLi}N GraZEd Wry XErxEs.`, `MY fAxed {JOke{ w~ON A pAgEr IN THe CabLE TV QUIZ show.`, `bATTle| of ThERMoPylAE: ~QUIcK ja~VeLiN ~grA~zeD WRy xeRXEs.`, `B|}ORED? crAVInG A} puB QuIZ fiX? WHY, JuSt COME TO tHe rOYa}L o}Ak!`, `fOXy pA~R~soNS qUiZ ||ANd CAJole} THE LOvaBLY dIm wikI-giRl.`, `CutE, KinD, j}O}ViaL, fOxy PHYSIQue, AmAzINg BEaUTy? w~OWSEr!`, `JAcK quietLy MoVEv Up |FROnT }AnV seiZev thE bIG bAlL of WaX.`, `a lARGe faWN juMped QUICKly ovER WH|}iTe zin}c BOXEs.`, `GRuMpy wiZarDs maKE ToXIC bREW For the Evi{L QueEn AnD jAc}K.`, `tUFT pOetF WdX BoLdly dF KiNGf DNd QUEeNf mDrcd OVEr fuZZ}|.`, `fYZPBDuEMKOAn~rJ|TgHIXQlWcs`, `all qUesTI}OnS~ aSKed bY fIVE WatChED EXPErTs aM~aZe thE jUdGE.`, `a ~LArGe FAwn~ JyMP~eD qyIcPly OveR WHIte} zINC bOXeS.`, `quIrkY }sPUd BOyS cAn Jam a{FtEr ZApPinG fiVE wOrtHY pOLYsIXes.`, `tHe WiZa|}Rd QUiCkly jINxEd thE GNomES beFOre THEy vAP{oRi~{ZeD.`, `CuTE, KINd,~ JOVI~aL, FoVY mHYsIQ|ue, aMAZiNg BeautY?~ lOlser!`, `aOY|nEhGpm~IKxcj}VZwBF~{uTDqsL`, `~RDtoZghBvWYXPfmIJL}SeCquKA`, `a OUiCk wOveWeCt oF T{HE ECe}WY |~WILl JEOpARdIZE |SIX guCbOaTs.`, `A q}uiCK MoveMent OF tHe eNEMY WiLL jeoPArdI|ZE SIx g}U~NbOaTS|.`, `bRaWNY gOdS JUst flO}cked Up T}o Quiz~ ANd VeX~ hIM.`, `~heY ZAwH, shouLd i pRogRAM a hEX EDItoR IN JAVA? Why noT S{Ql }or BRAInF--K!`, `6&gt;_4"gV9Lb?2!Ic7}=-M'Fd30PH~].O%@w+[8uNL&amp;t1yj&lt;AR(x;\${{^y#)q,Rj\\5/*:`, `how RaZorBack-juMP}inG FRo}GS cAN| level siX piqUE{d GyMnas|ts!`, `cQUyFNaMZdgIL}Rw|pTBXSEHoJv`, `TSaFW{umDXv~pNJCYElhoKQigBR`, `fix PRO{blem QuiC}klY }with| galVAnIzED Jets}.`, `quIoKH }sPuD BoHS CaN jam afTEO ZA|P~PiNg FIVE wOOthh pOLHSIxES.`, `WheN ZOmb~I}eS ArRIVe, qUiCKlY FAx ~juDGe pAT.`, `{haWuZoB|Qdr{gikyetLx}CMfsnvP`, `GXjnfR{B}svcQDLUIekwYaH~pz~TO`, `BOReD? CRAViNG a pXb pXiZ f{ix? WHY, JxSJ coME} JO jhE ROY}AL OAk!`, `n~oW oNzoobNCK-JuMpiNg fooGs cNn LEvEl sIx PIqUe|d gYmNN|Sts!`, `6&gt;_4"Gv9lb?2!ic7}=-m'fd30ph].O%@W+[8u{nK&amp;T1eS&lt;AZ{(X;\$\{^y#)q,rJ\\5/*:`, `jaCK QUIETly {mo{vED Up FRont AnD SEIzed THE BIg BaL{L O}F wA{X.`, `Ps{meN|zHKyaFwCVlx~ui|qr}tbogJ`, `Ze{qnhLOkGfYiXMUcsPr~VaDbtj`, `JtgfvqbsCzENXkluAph~DWyri|M`, `hEy zacH, sHoUld i PRoGRaM {A HEx e~dITOr iN jaVa? why nOt sQl oR {BrAInF--k!`, `SIXTM z~Ips wERe QUIcKlM Pi|ckED F~ROm The woVeN KutE BpG.`, `the QUIck bR||oWn FoX JuMPS{ OVEr The lazy d~oG.`, `{bqySjqFBd{qYaXgckILSunThEmo`, `jocKIX{ Will bIbgXT bOr ~tHX mO~st {xxpXnSIvx zOologY x}QIiPMXnT.`, `wh|EN ZOmbies H{rRiVE,} quiCKlY fhX jUdge Phz.`, `tDHM~GecrOIqYkj}ABPlsZFVwXn`, `QOymVpb{zhTAnXdLWe}jskcRFgU`, `XBzVSN~jAGwR{mlIChokUEQy}F}pD`, `UPvK{TC{ZNWMgebOahdjIf{YrLxs`, `THe QUIck brOwn f~Ox JumpS OSer THE lazY d{~og.`, `JAcKIE WiLl BuDGet FoR The M~o~sT eXpEnsivE zooloGY EqUipment.`, `t{He wiZarD qUIckLy JINxED t|he ~cNoMeS bEFoR~E The|Y vaPoriZEd.`, `bRawnY ~ROds j~USh fLockpd up ~Ho OUiZ AnD VPa HIm.`, `{gRUmtY YizArd|s MAkE toxIc bREy lOr tHe EVIr{ Q~ueen AnD EAck~.`, `fIX prLb~lEm qUiPklY WItH Ga~lV|aNIZ}eP JeTm.`, `bAcZ iN j{UNe WE Delive{rED OnyGEn eQuiGMENT om THe same siZe.`, `q{VsFNyMJgPre{kDCHa~tiWLuozX`, `Pj~|nAWmURv}SlxBiqHo}KzFtCDEG`, `uZkbONRQiyeHTCs{{jDGMPwVa}fl`, `XYOMaK~HjG|tEwLFrZBn{uisVd{~qC`, `jI|M QUiCKly reaLIzeD thAt THE bEAUtifuL gowNs Are eXp{EnsivE.`, `MY daRED OOKE WOn} A pager I}{n thE cABlE tv Quiz ShoW.`, `s}IX}Ty ZIps WE|re qUi}CkLy pIckeD fROm ThE WovEn JuTe BAg.`, `All cuEsTmonS As~KED yy FmVE wATchEd E|xPe{rTS amAZE THe judGE.`, `|JsM qUsCkl}Y REalsVeD tha}|T The beAUTSFul |goWns ArE EZPEnsSVe.`, `{ZhGW~KcxmajOEtsrBpulyQn|idV`, `FoXY PARSONS nuiz aN~D cajOLe THe LOVably dIm WIki~-girl.`, `sh|zGQ~MKpCfxUYveIAd}b|WN~JTRo`, `EiVKptlfbJzd}cyUqNgHWaOx|mR`, `kVqwBrDSMY~{nXzOGu}jFphL|E}TCI`, `B~PRsjZF|WdQya}xGCKILVU~nthEmO`, `BAck IN JunE {We dELiVeRed OxyG~En equIpmEnT oF tHE SAmE SIzE.`, `JkuaODr{n|ExIvFhmpQwYBSlG}Tz`, `svR}NMywof{DHIZtAEPUlqcjkbX`, `jUst PoETS{ waX bold}Ly AS KInGs| And qUeEns MaR|CH OVeR} FUZz.`, `}tb|cuGqiSromfhDpkzwEXNyv|jL`];

let count = 0;
const print = a => {
  o.innerHTML += `<div class="print"><span>${++count} - ${a}</div>`;
}

//print("arguments=" + arguments.length);
const pangramGrep = () => {
  arguments.map(arg=>{
    for(l="abcdefghijklmnopqrstuvwxyz".split(""), r=arg.toLowerCase(), c=0, i=0; i<r.length; i++)
      c=c||l.pop(),r.includes(c)&&(c=0);

    0===l.length&&print(arg)
  });
}
//</script>

