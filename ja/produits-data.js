// Shared data: seasonal product catalogue + glossary. Loaded by every page (window.SAISON). Japanese version: names, families (fam), texts translated; FAM_ID maps fam (JA) -> lexique id.
(function () {
  var ORIG = {
    FR: { flag: '🇫🇷', label: 'フランス', fr: true },
    AN: { flag: '🇫🇷', label: 'フランス領アンティル', fr: true },
    CO: { flag: '🇫🇷', label: 'コルシカ', fr: true },
    ES: { flag: '🇪🇸', label: 'スペイン', fr: false },
    IT: { flag: '🇮🇹', label: 'イタリア', fr: false },
    PE: { flag: '🇵🇪', label: 'ペルー', fr: false },
    CR: { flag: '🇨🇷', label: 'コスタリカ', fr: false }
  };
  var ALL = [1,2,3,4,5,6,7,8,9,10,11,12];
  function P(s, n, e, t, o, m, f, fam, d) { return { s: s, n: n, e: e, t: t, o: o, m: m, f: f, fam: fam, d: d }; }
  var produits = [
    P('carotte','ニンジン','🥕','legume','FR',ALL,[9,10,11,12],'セリ科','シャキッと甘い根菜。保存性が高いので、一年中出回ります。'),
    P('tomate','トマト','🍅','legume','FR',[6,7,8,9],[7,8],'ナス科','植物学的には果物ですが、野菜として料理されます。本当においしいのは真夏だけ。'),
    P('aubergine','ナス','🍆','legume','FR',[6,7,8,9],[7,8],'ナス科','油をよく吸う、とろける果肉。ラタトゥイユやナスのディップの主役です。'),
    P('courgette','ズッキーニ','🥒','legume','FR',[6,7,8,9],[7,8],'ウリ科','たくさん実り、くせのない味。生でリボン状にしても、数分ソテーしても。'),
    P('concombre','キュウリ','🥒','legume','FR',[5,6,7,8,9],[6,7,8],'ウリ科','95%以上が水分。夏いちばんのさわやかな野菜です。'),
    P('poivron','パプリカ','🫑','legume','FR',[7,8,9,10],[8,9],'ナス科','緑、黄、そして赤。同じ植物を、熟し具合の違う段階で収穫したものです。'),
    P('piment','唐辛子','🌶️','legume','FR',[7,8,9,10],[8,9],'ナス科','パプリカの辛いいとこ。エスペレット唐辛子はAOP（原産地呼称保護）を取得しています。'),
    P('brocoli','ブロッコリー','🥦','legume','FR',[6,7,8,9,10,11],[9,10],'アブラナ科','開く前のつぼみを食べます。緑色を保つには短時間で加熱を。'),
    P('chou','キャベツ','🥬','legume','FR',[1,2,3,10,11,12],[11,12,1],'アブラナ科','冬野菜の代表格。初霜の後は甘みが増します。'),
    P('laitue','レタス','🥬','legume','FR',[4,5,6,7,8,9,10],[5,6],'キク科','やわらかい葉は早めに、できれば買った日に食べましょう。'),
    P('epinard','ホウレンソウ','🥬','legume','FR',[3,4,5,9,10,11],[4,10],'ヒユ科','春と秋の葉物。生でサラダに、またはさっと火を通して。'),
    P('pomme-de-terre','ジャガイモ','🥔','legume','FR',ALL,[9,10],'ナス科','春は新ジャガ、ほかの季節は貯蔵ジャガイモ。品種ごとに向く料理があります。'),
    P('mais','スイートコーン','🌽','legume','FR',[8,9,10],[8,9],'イネ科','甘い粒は、糖がでんぷんに変わる前に、収穫してすぐ焼くかゆでて。'),
    P('petit-pois','グリンピース','🫛','legume','FR',[5,6,7],[6],'マメ科','短く貴重な旬。さやから出したら、その日のうちに調理しましょう。'),
    P('haricot-vert','サヤインゲン','🫛','legume','FR',[6,7,8,9],[7,8],'マメ科','中の豆が育つ前の若いさやを、まるごと食べます。'),
    P('potiron','カボチャ','🎃','legume','FR',[9,10,11,12,1],[10,11],'ウリ科','乾いた場所で数か月保存できます。スープにぴったり。'),
    P('ail','ニンニク','🧄','legume','FR',[6,7,8,9,10],[7,8],'ヒガンバナ科','生のニンニクは6月に登場。乾燥させれば冬までもちます。'),
    P('oignon','タマネギ','🧅','legume','FR',[1,2,3,7,8,9,10,11,12],[9,10],'ヒガンバナ科','ほぼすべての料理の基本。ロスコフのピンクタマネギはAOPを取得しています。'),
    P('champignon','マッシュルーム','🍄‍🟫','legume','FR',ALL,[10,11],'ハラタケ科','洞窟で一年中栽培されています。植物学的には果物でも野菜でもなく、キノコです。'),
    P('patate-douce','サツマイモ','🍠','legume','ES',[10,11,12,1,2,3],[11,12],'ヒルガオ科','甘い塊茎ですが、ジャガイモとはまったく別の植物です。'),
    P('fraise','イチゴ','🍓','fruit','FR',[4,5,6,7],[5,6],'バラ科','本当の果実は、表面の小さなつぶつぶ。「そう果」と呼ばれます。'),
    P('cerise','サクランボ','🍒','fruit','FR',[5,6,7],[6],'バラ科','旬がとても短い核果。収穫後はそれ以上熟しません。'),
    P('peche','モモ','🍑','fruit','FR',[6,7,8,9],[7,8],'バラ科','ジューシーな核果。香りがよく、指で押すとやわらかいものを選びましょう。'),
    P('melon','メロン','🍈','fruit','FR',[6,7,8,9],[7,8],'ウリ科','おいしいメロンは大きさのわりに重く、へたが自然に取れます。'),
    P('pasteque','スイカ','🍉','fruit','ES',[6,7,8],[7,8],'ウリ科','90%以上が水分。たたいて空洞のような音がしたら良いしるし。'),
    P('myrtille','ブルーベリー','🫐','fruit','FR',[7,8,9],[8],'ツツジ科','森や山の小さなベリー。抗酸化作用のある色素が豊富です。'),
    P('raisin','ブドウ','🍇','fruit','FR',[8,9,10],[9],'ブドウ科','一粒一粒がベリー。モワサックのシャスラはAOPを取得しています。'),
    P('pomme','リンゴ','🍎','fruit','FR',[1,2,3,4,8,9,10,11,12],[9,10,11],'バラ科','フランスで最も食べられている果物。晩生の品種は冬じゅう保存できます。'),
    P('poire','洋ナシ','🍐','fruit','FR',[8,9,10,11,12,1],[9,10],'バラ科','熟す前に収穫し、常温で追熟させます。'),
    P('chataigne','栗','🌰','fruit','FR',[10,11,12],[10,11],'ブナ科','アルデシュやセヴェンヌの森の木の実。焼き栗にしたり、スプレッドにしたり。'),
    P('kiwi','キウイ','🥝','fruit','FR',[11,12,1,2,3,4],[12,1,2],'マタタビ科','アドゥールのキウイは、IGPとLabel Rougeを取得しています。'),
    P('clementine','クレメンタイン','🍊','fruit','CO',[11,12,1,2],[12,1],'ミカン科','コルシカのクレメンタイン（IGP）は、実に残された葉が目印です。'),
    P('orange','オレンジ','🍊','fruit','ES',[12,1,2,3,4],[1,2],'ミカン科','冬の柑橘。ブラッドオレンジは1月に登場します。'),
    P('citron','レモン','🍋','fruit','ES',[11,12,1,2,3,4,5],[1,2,3],'ミカン科','酸味のある柑橘。皮は果汁と同じくらい風味をもたらします。'),
    P('avocat','アボカド','🥑','fruit','ES',[11,12,1,2,3,4],[1,2,3],'クスノキ科','植物学的にはベリー。収穫後にだけ熟します。'),
    P('banane','バナナ','🍌','fruit','AN',ALL,[],'バショウ科','フランス領アンティルで一年中収穫され、はっきりした旬はありません。'),
    P('ananas','パイナップル','🍍','fruit','CR',ALL,[3,4],'パイナップル科','集合果。うろこの一枚一枚が、ベリーになった花です。'),
    P('mangue','マンゴー','🥭','fruit','PE',[11,12,1,2,3],[12,1],'ウルシ科','大きな熱帯の核果。ペルーの旬は、フランスの冬にあたります。'),
    P('basilic','バジル','🌿','herbe','FR',[5,6,7,8,9],[7,8],'シソ科','太陽が好きで寒さが苦手なハーブ。冷蔵庫には決して入れないで。'),
    P('menthe','ミント','🌿','herbe','FR',[5,6,7,8,9],[6,7],'シソ科','庭では広がりすぎるほど元気。料理にもハーブティーにも爽やかさを。'),
    P('persil','パセリ','🌿','herbe','FR',[3,4,5,6,7,8,9,10,11],[5,6],'セリ科','平葉でも縮れ葉でも、植物学的にはニンジンのいとこ。'),
    P('ciboulette','チャイブ','🌱','herbe','FR',[3,4,5,6,7,8,9,10],[4,5],'ヒガンバナ科','やさしいタマネギの風味。食べる直前にハサミで切って。'),
    P('thym','タイム','🌿','herbe','FR',ALL,[5,6],'シソ科','地中海の低木林（ガリーグ）のハーブ。生でも乾燥でもおいしい。'),
    P('gingembre','ショウガ','🫚','herbe','PE',ALL,[],'ショウガ科','スパイシーな根茎。一年中輸入されていて、冷凍保存にもとても向いています。'),
    P("asperge","アスパラガス","🌱","legume","FR",[4,5,6],[5],"キジカクシ科","やわらかな春の若芽。日光の当たり方によって、白、緑、紫になります。"),
    P("radis","ラディッシュ","🌱","legume","FR",[3,4,5,6,7,8,9,10],[4,5,6],"アブラナ科","菜園でいちばん早く育つ作物。種まきから収穫まで1か月。"),
    P("framboise","ラズベリー","🍓","fruit","FR",[6,7,8,9,10],[7],"バラ科","繊細な夏のベリー。摘むと中が空洞になります。"),
    P("abricot","アンズ","🍑","fruit","FR",[6,7,8],[7],"バラ科","オレンジ色の夏の果物。フランスの主産地はルシヨンとローヌ渓谷です。"),
    P("prune","プラム","🫐","fruit","FR",[7,8,9],[8],"バラ科","ミラベル、レーヌ・クロード、ダムソン…プラムには何十もの品種があります。"),
    P("figue","イチジク","🟣","fruit","FR",[8,9,10],[9],"クワ科","地中海の古くからの果物。よく熟したものを生で、またはローストして。"),
    P("betterave","ビーツ","🌱","legume","FR",[1,2,3,7,8,9,10,11,12],[10,11,12],"ヒユ科","甘い根菜。生でも加熱済みでも売られ、その汁は何でもピンクに染めます。"),
    P("poireau","ポロネギ","🌱","legume","FR",[1,2,3,4,9,10,11,12],[11,12,1],"ヒガンバナ科","タマネギのいとこで、冬のスープやヴィネグレット和えの主役。"),
    P("chou-fleur","カリフラワー","🥦","legume","FR",[1,2,3,4,9,10,11,12],[10,11,12,1,2,3],"アブラナ科","開く前に収穫する、白く大きな花蕾。フランス最大の産地はブルターニュです。"),
    P("endive","チコリ","🥬","legume","FR",[1,2,3,4,10,11,12],[12,1,2],"キク科","白さを保つために暗闇で育てます。北フランスの特産品。"),
    P("rhubarbe","ルバーブ","🌱","fruit","FR",[4,5,6,7],[5,6],"タデ科","酸味のある長い春の茎。タルトやコンポートで、果物のように調理します。"),
    P("cassis","カシス","🫐","fruit","FR",[6,7,8],[7],"スグリ科","香りの強い小さな黒いベリー。ブルゴーニュの象徴です。"),
    P("coing","マルメロ","🍐","fruit","FR",[9,10,11,12],[10,11],"バラ科","硬く香り高い果実。生では食べられませんが、ゼリーやパート・ド・フリュイにすると絶品。"),
    P("artichaut","アーティチョーク","🌱","legume","FR",[5,6,7,8,9,10],[6,7],"キク科","開く前に食べる大きな花のつぼみ。フランス最大の産地はブルターニュです。"),
    P("fenouil","フェンネル","🌱","legume","FR",[6,7,8,9,10,11],[8,9,10],"セリ科","アニスの香りのするシャキッとした株。生でサラダに、ローストしてやわらかくしても。"),
    P("navet","カブ","🌱","legume","FR",[1,2,3,4,5,10,11,12],[10,11,12],"アブラナ科","白と紫の根で、やさしい味。煮込みやポトフの主役。"),
    P("panais","パースニップ","🌱","legume","FR",[1,2,3,10,11,12],[11,12,1],"セリ科","ナッツのような風味の、白く甘い根。ピュレやチップスで再び人気に。"),
    P("coriandre","コリアンダー","🌿","herbe","FR",[5,6,7,8,9,10],[6,7,8],"セリ科","レモンのような香りの爽やかなハーブ。アジア、北アフリカ、中南米の料理に欠かせません。"),
    P("romarin","ローズマリー","🌿","herbe","FR",[1,2,3,4,5,6,7,8,9,10,11,12],[5,6,7],"シソ科","香りのよい針状の葉をもつ地中海の低木。グリルした肉やジャガイモにぴったり。"),
    P("estragon","タラゴン","🌿","herbe","FR",[5,6,7,8,9,10],[6,7,8],"キク科","アニスの風味の繊細なハーブ。ベアルネーズソースに欠かせません。"),
    P("feve","ソラマメ",'🫘','legumineuse','FR',[4,5,6,7],[5,6],"マメ科","春のさや豆。さやから出し、さらに薄皮をむくと、甘くやわらかな味に。"),
    P("haricot-coco","ココ豆",'🫘','legumineuse','FR',[7,8,9,10],[8,9],"マメ科","白やピンクのまだらの生の豆。浸水不要で早く煮えて、とてもクリーミー。"),
    P("flageolet","フラジオレ",'🫘','legumineuse','FR',[7,8,9,10],[8,9],"マメ科","完熟前に収穫する、小さな淡い緑の豆。晩夏は生で、それ以外の季節は乾燥豆で。"),
    P("lentille","レンズ豆",'🫘','legumineuse','FR',[1,2,3,4,5,6,7,8,9,10,11,12],[9,10,11],"マメ科","夏に収穫して乾燥。一年中保存でき、浸水なしで20分で煮えます。"),
    P("pois-chiche","ヒヨコ豆",'🫘','legumineuse','FR',[1,2,3,4,5,6,7,8,9,10,11,12],[9,10,11],"マメ科","夏の終わりに収穫し、乾燥させれば1年もちます。フムスやファラフェルの材料。"),
    P("haricot-sec","乾燥インゲン豆",'🫘','legumineuse','FR',[1,2,3,4,5,6,7,8,9,10,11,12],[10,11,12,1,2],"マメ科","ランゴ、タルベ、モジェット：秋に収穫し、冬じゅう煮込む保存用の豆。")
  ];
  var IMGS = {"feve":"../images/proteines/feve.webp","haricot-coco":"../images/proteines/haricot-coco.webp","flageolet":"../images/proteines/flageolet.webp","lentille":"../images/proteines/lentille.webp","pois-chiche":"../images/proteines/pois-chiche.webp","haricot-sec":"../images/proteines/haricot-sec.webp","rhubarbe":"../images/rhubarbe.webp","cassis":"../images/cassis.webp","coing":"../images/coing.webp","artichaut":"../images/artichaut.webp","fenouil":"../images/fenouil.webp","navet":"../images/navet.webp","panais":"../images/panais.webp","coriandre":"../images/coriandre.webp","romarin":"../images/romarin.webp","estragon":"../images/estragon.webp","asperge":"../images/asperge.webp","radis":"../images/radis.webp","framboise":"../images/framboise.webp","abricot":"../images/abricot.webp","prune":"../images/prune.webp","figue":"../images/figue.webp","betterave":"../images/betterave.webp","poireau":"../images/poireau.webp","chou-fleur":"../images/chou-fleur.webp","endive":"../images/endive.webp","ail":"../images/ail.webp","ananas":"../images/ananas.webp","aubergine":"../images/aubergine.webp","avocat":"../images/avocat.webp","banane":"../images/banane.webp","basilic":"../images/basilic.webp","brocoli":"../images/brocoli.webp","carotte":"../images/carotte.webp","cerise":"../images/cerise.webp","champignon":"../images/champignon.webp","chataigne":"../images/chataigne.webp","chou":"../images/chou.webp","ciboulette":"../images/ciboulette.webp","citron":"../images/citron.webp","clementine":"../images/clementine.webp","concombre":"../images/concombre.webp","courgette":"../images/courgette.webp","epinard":"../images/epinard.webp","fraise":"../images/fraise.webp","gingembre":"../images/gingembre.webp","haricot-vert":"../images/haricot-vert.webp","kiwi":"../images/kiwi.webp","laitue":"../images/laitue.webp","mais":"../images/mais.webp","mangue":"../images/mangue.webp","melon":"../images/melon.webp","menthe":"../images/menthe.webp","myrtille":"../images/myrtille.webp","oignon":"../images/oignon.webp","orange":"../images/orange.webp","pasteque":"../images/pasteque.webp","patate-douce":"../images/patate-douce.webp","peche":"../images/peche.webp","persil":"../images/persil.webp","petit-pois":"../images/petit-pois.webp","piment":"../images/piment.webp","poire":"../images/poire.webp","poivron":"../images/poivron.webp","pomme-de-terre":"../images/pomme-de-terre.webp","pomme":"../images/pomme.webp","potiron":"../images/potiron.webp","raisin":"../images/raisin.webp","thym":"../images/thym.webp","tomate":"../images/tomate.webp"};
  produits.forEach(function (p) { p.orig = ORIG[p.o]; p.img = IMGS[p.s] || ''; });

  var carotte = produits[0];
  carotte.detail = {
    title: 'ニンジンの旬：産地・栄養・カレンダー',
    intro: 'フランスで最も食べられているオレンジ色の根菜、ニンジンは一年中マルシェに並びます。春は葉付きの束で売られる新ニンジン、秋から冬は貯蔵ニンジン。ちょうどよい時期の選び方、保存法、料理法をご紹介します。',
    regions: 'ヌーヴェル＝アキテーヌ（ランド）、ノルマンディー、オー＝ド＝フランス、ブルターニュ',
    variete: 'ナント、シャントネー、フラッキー、伝統品種のニンジン（黄・紫・白）',
    nutrition: [
      ['エネルギー', '≈ 36 kcal'],
      ['炭水化物', '≈ 6.6 g'],
      ['うち糖質', '≈ 4.9 g'],
      ['食物繊維', '≈ 2.5 g'],
      ['βカロテン', '≈ 7 mg'],
      ['カリウム', '≈ 300 mg']
    ],
    bienfaits: [
      ['βカロテン', 'オレンジ色の色素は体内でビタミンAに変わり、目や肌の健康に役立ちます。少量の油と一緒にとると吸収がよくなります。'],
      ['やさしい食物繊維', '生でも加熱しても、おなかにやさしい食物繊維がとれ、消化を助けます。'],
      ['低カロリー', '100gあたり約36kcal。スープやピュレの、軽くて満足感のあるベースになります。']
    ],
    choisir: 'かたくてなめらかで、色が鮮やかでひび割れのないものを選びましょう。束売りなら、葉が鮮やかな緑色であること。それが一番の鮮度の目安です。',
    conserver: '家に帰ったらすぐに葉を切り落としましょう（根の水分を吸ってしまいます）。冷蔵庫の野菜室で保存：新ニンジンは1〜2週間、貯蔵ニンジンは数週間もちます。',
    recettes: [
      ['キャロットラペ（レモン風味）', '生のニンジンに、オリーブオイル、レモン汁、パセリをかけて。'],
      ['ニンジンとクミンのポタージュ', 'ニンジン、タマネギにクミンを少し加え、ゆで汁ごとミキサーに。'],
      ['ニンジンのハニーロースト', 'まるごとオーブンで、タイムとはちみつ大さじ1杯と一緒に。']
    ],
    saviez: 'ニンジンは昔からオレンジ色だったわけではありません。最初に栽培されたニンジンは紫や黄色でした。17世紀のオランダで品種改良が進み、オレンジ色が主流になりました。',
    faq: [
      ['ニンジンの旬はいつ？', 'フランスではニンジンは一年中手に入ります。新ニンジンは5月〜7月、貯蔵ニンジンは9月〜3月。最盛期は9月〜12月です。'],
      ['ニンジンの皮はむくべき？', 'オーガニックか、よく洗ったものならむく必要はありません。軽くこするだけで十分で、皮のすぐ下にある栄養素も残せます。'],
      ['ニンジンの葉は食べられる？', 'はい。新鮮なニンジンの葉は、香味野菜のようにペスト、スープ、天ぷらにできます。']
    ],
    lexique: ['apiacees', 'primeur', 'legume-racine', 'bio']
  };

  var lexique = [
    { id: 'agrume', fam: ['potager'], terme: '柑橘類', cat: 'botanique', def: 'ミカン科の果物（オレンジ、レモン、クレメンタインなど）。果肉は房に分かれ、皮には精油が豊富に含まれています。', ex: ['orange','citron','clementine'] },
    { id: 'akene', fam: ['potager'], terme: 'そう果', cat: 'botanique', def: '裂けずに種を1つだけ含む、小さな乾いた果実。イチゴの表面の「種」はそう果です。', ex: ['fraise'] },
    { id: 'amaryllidacees', fam: ['potager'], terme: 'ヒガンバナ科', cat: 'famille', def: 'ニンニク、タマネギ、エシャロット、ポロネギ、チャイブを含む植物の科。', ex: ['ail','oignon','ciboulette'] },
    { id: 'apiacees', fam: ['potager'], terme: 'セリ科', cat: 'famille', def: '旧名は散形科。傘のような形の花をつける植物で、ニンジン、セロリ、フェンネル、パセリなどが含まれます。', ex: ['carotte','persil'] },
    { id: 'baie', fam: ['potager'], terme: 'ベリー（液果）', cat: 'botanique', def: '硬い核がなく、複数の種を含む果肉の多い果実。ブドウ、ブルーベリー、トマト、さらにはアボカドやバナナも。', ex: ['raisin','myrtille','tomate'] },
    { id: 'brassicacees', fam: ['potager'], terme: 'アブラナ科', cat: 'famille', def: '旧名は十字花科。キャベツ、ブロッコリー、ラディッシュ、カブのなかまです。', ex: ['brocoli','chou'] },
    { id: 'cucurbitacees', fam: ['potager'], terme: 'ウリ科', cat: 'famille', def: '大きな実をつける、つる性の植物。ズッキーニ、キュウリ、メロン、スイカ、カボチャ。', ex: ['courgette','melon','potiron'] },
    { id: 'drupe', fam: ['potager'], terme: '核果', cat: 'botanique', def: '種を1つ包む硬い核をもつ、果肉の多い果実。サクランボ、モモ、アンズ、プラム、マンゴー、オリーブ。', ex: ['cerise','peche','mangue'] },
    { id: 'fabacees', fam: ['potager'], terme: 'マメ科', cat: 'famille', def: 'さやをつける植物（エンドウ、インゲン、レンズ豆）で、空気中の窒素を取り込むことができます。', ex: ['petit-pois','haricot-vert'] },
    { id: 'legume-racine', fam: ['potager'], terme: '根菜', cat: 'botanique', def: '植物の栄養の貯蔵庫である、太った根を食べる野菜。ニンジン、ビーツ、ラディッシュ、パースニップ。', ex: ['carotte'] },
    { id: 'primeur', fam: ['potager'], terme: '早出しもの（プリムール）', cat: 'botanique', def: '完熟前、旬の始まりに収穫される果物や野菜。やわらかく繊細で、日持ちはしません。', ex: ['carotte','pomme-de-terre'] },
    { id: 'rhizome', fam: ['potager'], terme: '根茎', cat: 'botanique', def: '地下で横に伸び、養分を蓄える茎。ショウガなど。', ex: ['gingembre'] },
    { id: 'rosacees', fam: ['potager'], terme: 'バラ科', cat: 'famille', def: 'バラのなかま。リンゴ、洋ナシ、サクランボ、モモ、イチゴなど、果樹園の果物の多くもこの科です。', ex: ['pomme','poire','fraise'] },
    { id: 'solanacees', fam: ['potager'], terme: 'ナス科', cat: 'famille', def: 'トマト、ナス、パプリカ、唐辛子、ジャガイモのなかま。葉には毒があることが多いです。', ex: ['tomate','aubergine','pomme-de-terre'] },
    { id: 'tubercule', fam: ['potager'], terme: '塊茎', cat: 'botanique', def: 'でんぷんを蓄え、植物が再び育つためのふくらんだ地下の器官。ジャガイモ、サツマイモ。', ex: ['pomme-de-terre','patate-douce'] },
    { id: 'bio', fam: ['potager','fromage'], terme: 'ABマーク – 有機農業', cat: 'label', def: '化学合成農薬や化学肥料、遺伝子組み換え作物を使わない生産を保証する、フランスの公式ラベル。認証機関が検査します。', ex: [] },
    { id: 'aop', fam: ['potager','fromage'], terme: 'AOP – 原産地呼称保護', cat: 'label', def: 'ヨーロッパのラベル。定められた地域で、認められた伝統の技に従って、生産のすべての工程が行われます。例：セヴェンヌの甘タマネギ、エスペレット唐辛子。', ex: ['oignon','piment'] },
    { id: 'igp', fam: ['potager','fromage'], terme: 'IGP – 地理的表示保護', cat: 'label', def: 'ヨーロッパのラベル。生産工程の少なくとも1つが、その産品の評判を生んだ地域で行われます。例：コルシカのクレメンタイン、アドゥールのキウイ。', ex: ['clementine','kiwi'] },
    { id: 'label-rouge', fam: ['potager','fromage'], terme: 'Label Rouge', cat: 'label', def: '一般的な製品よりも優れた味であることを、試食テストで確認して認証するフランスの国家ラベル。', ex: ['kiwi'] },
    { id: 'hve', fam: ['potager'], terme: 'HVE – 高環境価値認証', cat: 'label', def: '生物多様性、資材や水の管理を評価するフランスの農場認証。オーガニックほど厳しくはありません。', ex: [] },
    { id: 'origine-france', fam: ['potager'], terme: 'Fruits et Légumes de France', cat: 'label', def: 'フランスで栽培・収穫された産品であることを保証する、業界のロゴ。', ex: [] },
    { id: 'annuelle', fam: ['jardin'], terme: '一年草', cat: 'jardinage', def: '1年のうちに発芽、開花、結実して枯れる植物。コスモス、ナスタチウム、ジニア。', ex: [] },
    { id: 'bisannuelle', fam: ['jardin'], terme: '二年草', cat: 'jardinage', def: '1年目に葉を育て、2年目に花を咲かせて枯れる植物。パンジー、ジギタリス、ワスレナグサ。', ex: [] },
    { id: 'vivace', fam: ['jardin'], terme: '多年草', cat: 'jardinage', def: '何年も生きる植物。地上部は冬に枯れることが多いですが、春に根元から再び芽吹きます。', ex: [] },
    { id: 'semis', fam: ['jardin'], terme: '種まき', cat: 'jardinage', def: '種を土にまくこと。屋外に直接まく方法と、小さなポットで育ててから植えつける方法があります。', ex: [] },
    { id: 'repiquage', fam: ['jardin'], terme: '移植', cat: 'jardinage', def: '若い苗をポットやトレーから最終的な場所に移し、育つスペースを与えること。', ex: [] },
    { id: 'bouture', fam: ['jardin'], terme: '挿し木', cat: 'jardinage', def: '植物から茎や葉の一部を切り取って根を出させ、同じ性質の新しい株を育てること。', ex: [] },
    { id: 'paillage', fam: ['jardin'], terme: 'マルチング', cat: 'jardinage', def: '植物のまわりに素材（わら、落ち葉、乾いた刈り草）の層を敷き、湿気を保ち、雑草を抑えること。', ex: [] },
    { id: 'affinage', fam: ['fromage'], terme: '熟成', cat: 'fromagerie', def: 'チーズがカーヴで熟成し、外皮、食感、風味を育む期間。数日から数年に及びます。', ex: [] },
    { id: 'lait-cru', fam: ['fromage'], terme: '生乳', cat: 'fromagerie', def: '40 °C以上に加熱されていない乳。自然の微生物が残り、より豊かな味わいのチーズになります。', ex: [] },
    { id: 'presure', fam: ['fromage'], terme: 'レンネット（凝乳酵素）', cat: 'fromagerie', def: '乳を固める酵素。チーズになるカード（凝乳）と、ホエイ（乳清）を分けます。', ex: [] },
    { id: 'croute-fleurie', fam: ['fromage'], terme: '白カビタイプ', cat: 'fromagerie', def: 'カビ（ペニシリウム・カンディダム）によってできる、白くふわふわした外皮。カマンベール、ブリー。', ex: [] },
    { id: 'croute-lavee', fam: ['fromage'], terme: 'ウォッシュタイプ', cat: 'fromagerie', def: '熟成中に塩水でこすって作る、オレンジ色でべたつく外皮。チーズに強い風味を与えます。マンステール、マロワール。', ex: [] },
    { id: 'pate-pressee-cuite', fam: ['fromage'], terme: '加熱圧搾タイプ', cat: 'fromagerie', def: '加熱したカードを圧搾してホエイを除いたもの。コンテやボーフォールのような、長期保存できる大きなチーズ。', ex: [] },
    { id: 'pate-persillee', fam: ['fromage'], terme: '青カビタイプ', cat: 'fromagerie', def: '内部に青や緑のカビの筋が広がるチーズ。ロックフォール、ブルー・ドーヴェルニュ。', ex: [] },
    { id: 'fermier', fam: ['fromage'], terme: 'フェルミエ（農家製）', cat: 'fromagerie', def: '農場で、その農場の家畜の乳だけを使って作られるチーズ。', ex: [] },
    { id: 'frai', fam: ['poisson'], terme: "産卵期", cat: 'peche', def: "魚が卵を産む時期。種が再生できるよう、この時期は獲ったり買ったりしないのが望ましいです。", ex: [] },
    { id: 'peche-ligne', fam: ['poisson'], terme: "釣り漁", cat: 'peche', def: "針を使い、一尾ずつ獲る漁法。選択性が高く、魚や海底をほとんど傷つけません。", ex: [] },
    { id: 'casier', fam: ['poisson'], terme: "かご漁", cat: 'peche', def: "海底に仕掛けるかごで、カニ、ロブスター、アカザエビ、コウイカを獲ります。小さすぎるものは生きたまま放されます。", ex: [] },
    { id: 'chalut', fam: ['poisson'], terme: "トロール網", cat: 'peche', def: "船で引く、大きな漏斗形の網。効率的ですが、海底をこするときは選択性が低くなります。", ex: [] },
    { id: 'bolinche', fam: ['poisson'], terme: "巻き網", cat: 'peche', def: "イワシやアンチョビなどの魚群を囲み、底を閉じる網。", ex: [] },
    { id: 'palangre', fam: ['poisson'], terme: "はえ縄", cat: 'peche', def: "多数の針をつけた長い縄。海底に仕掛けたり、漂わせたりします。", ex: [] },
    { id: 'prise-accessoire', fam: ['poisson'], terme: "混獲", cat: 'peche', def: "狙っていないのに獲れてしまう種で、多くは海に戻されます。選択的な漁法で減らせます。", ex: [] },
    { id: 'taille-minimale', fam: ['poisson'], terme: "最小サイズ", cat: 'peche', def: "これより小さい魚や貝は持ち帰ってはいけない、という大きさ。繁殖する時間を与えるためです。", ex: [] },
    { id: 'fermeture-peche', fam: ['poisson'], terme: "禁漁期", cat: 'peche', def: "ある種の漁が法律で禁止される期間。たとえば、ホタテ貝の夏。", ex: [] },
    { id: 'mollusque', fam: ['poisson'], terme: "軟体動物", cat: 'peche', def: "やわらかい体をもち、多くは殻で守られた動物。カキ、ムール貝、ツブ貝、そしてコウイカやヤリイカも。", ex: [] },
    { id: 'bivalve', fam: ['poisson'], terme: "二枚貝", cat: 'peche', def: "蝶番でつながった2枚の殻をもつ軟体動物。カキ、ムール貝、アサリ、ザルガイ、ホタテ貝。", ex: [] },
    { id: 'cephalopode', fam: ['poisson'], terme: "頭足類", cat: 'peche', def: "吸盤のついた腕をもつ軟体動物。コウイカ、ヤリイカ、タコなど。", ex: [] },
    { id: 'crustace', fam: ['poisson'], terme: "甲殻類", cat: 'peche', def: "殻と関節のある脚をもつ動物。カニ、ロブスター、アカザエビ、エビ。", ex: [] },
    { id: 'poisson-plat', fam: ['poisson'], terme: "カレイ・ヒラメ類", cat: 'peche', def: "海底に平らに横たわり、両目が同じ側にある魚。シタビラメ、ツノガレイ、ターボット。", ex: [] },
    { id: 'ouies', fam: ['poisson'], terme: "えら", cat: 'peche', def: "魚が呼吸するための器官。鮮やかな赤いえらは、新鮮さのしるしです。", ex: [] },
    { id: 'bouchot', fam: ['poisson'], terme: "ブショ", cat: 'peche', def: "ムール貝を養殖するために、海に立てた木の杭。", ex: [] },
    { id: 'corail', fam: ['poisson'], terme: "コライユ（生殖巣）", cat: 'peche', def: "ホタテ貝やウニのオレンジ色の部分。生殖器官で、とても珍重されます。", ex: [] },
    { id: 'triploide', fam: ['poisson'], terme: "三倍体のカキ", cat: 'peche', def: "繁殖しない、養殖場生まれのカキ。夏でも乳白にならない。「海生まれ」のカキのほうが好まれます。", ex: [] },
    { id: 'msc', fam: ['poisson'], terme: "MSC", cat: 'peche', def: "持続可能な漁業を保証する国際ラベル。資源が健全で、環境への影響が限られていることが条件です。", ex: [] }
  ];

  var MOIS = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  var MOIS_C = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  var TYPES = { fruit: { label: '果物', one: '果物', e: '🍊' }, legume: { label: '野菜', one: '野菜', e: '🥦' }, legumineuse: { label: '豆類', one: '豆類', e: '🫘' }, herbe: { label: 'ハーブ', one: 'ハーブ', e: '🌿' } };

  function url(p, prefix) {
    prefix = prefix || '';
    return prefix + 'produits/' + p.s + '.html';
  }
  function bySlug(s) { for (var i = 0; i < produits.length; i++) if (produits[i].s === s) return produits[i]; return null; }
  function vis(p, prefix) { var u = p.img ? (prefix || '') + p.img : ''; return { e: p.e, img: u, imgBg: u ? 'center / contain no-repeat url("' + u + '")' : 'none', noImg: !p.img }; }

  var RECETTES = {"rhubarbe":["ルバーブのクランブル","https://www.bbcgoodfood.com/search?q=Rhubarb%20crumble"],"cassis":["カシスジャム","https://www.bbcgoodfood.com/search?q=Blackcurrant%20jam"],"coing":["マルメロのパート・ド・フリュイ","https://www.bbcgoodfood.com/search?q=Quince%20paste"],"artichaut":["アーティチョークの詰め物","https://www.bbcgoodfood.com/search?q=Stuffed%20artichokes"],"fenouil":["フェンネルのロースト","https://www.bbcgoodfood.com/search?q=Roasted%20fennel"],"navet":["子羊とカブのナヴァラン","https://www.bbcgoodfood.com/search?q=Lamb%20navarin%20with%20turnips"],"panais":["パースニップのロースト","https://www.bbcgoodfood.com/search?q=Roasted%20parsnips"],"coriandre":["コリアンダーのチャツネ","https://www.bbcgoodfood.com/search?q=Coriander%20chutney"],"romarin":["子羊のローズマリーロースト","https://www.bbcgoodfood.com/search?q=Rosemary%20roast%20lamb"],"estragon":["鶏肉のタラゴン風味","https://www.bbcgoodfood.com/search?q=Tarragon%20chicken"],"asperge":["アスパラガスのオランデーズソース","https://www.bbcgoodfood.com/search?q=Asparagus%20with%20hollandaise"],"radis":["ラディッシュのサラダ","https://www.bbcgoodfood.com/search?q=Radish%20salad"],"framboise":["ラズベリータルト","https://www.bbcgoodfood.com/search?q=Raspberry%20tart"],"abricot":["アンズのクランブル","https://www.bbcgoodfood.com/search?q=Apricot%20crumble"],"prune":["プラムのクランブル","https://www.bbcgoodfood.com/search?q=Plum%20crumble"],"figue":["イチジクのはちみつロースト","https://www.bbcgoodfood.com/search?q=Roasted%20figs%20with%20honey"],"betterave":["ビーツのサラダ","https://www.bbcgoodfood.com/search?q=Beetroot%20salad"],"poireau":["ポロネギとジャガイモのスープ","https://www.bbcgoodfood.com/search?q=Leek%20and%20potato%20soup"],"chou-fleur":["カリフラワーのチーズ焼き","https://www.bbcgoodfood.com/search?q=Cauliflower%20cheese"],"endive":["チコリの蒸し煮","https://www.bbcgoodfood.com/search?q=Braised%20chicory"],"carotte":["キャロット・ヴィシー","https://www.bbcgoodfood.com/search?q=Vichy%20carrots"],"tomate":["トマトのファルシ","https://www.bbcgoodfood.com/search?q=Stuffed%20tomatoes"],"aubergine":["ババガヌーシュ","https://www.bbcgoodfood.com/search?q=Baba%20ganoush"],"courgette":["ズッキーニのグラタン","https://www.bbcgoodfood.com/search?q=Courgette%20gratin"],"concombre":["ザジキ","https://www.bbcgoodfood.com/search?q=Tzatziki"],"poivron":["ピペラード","https://www.bbcgoodfood.com/search?q=Piperade"],"piment":["チリコンカン","https://www.bbcgoodfood.com/search?q=Chilli%20con%20carne"],"brocoli":["ブロッコリーのチーズ焼き","https://www.bbcgoodfood.com/search?q=Broccoli%20cheese"],"chou":["ロールキャベツ","https://www.bbcgoodfood.com/search?q=Stuffed%20cabbage"],"laitue":["シーザーサラダ","https://www.bbcgoodfood.com/search?q=Caesar%20salad"],"epinard":["ホウレンソウのクリーム煮","https://www.bbcgoodfood.com/search?q=Creamed%20spinach"],"pomme-de-terre":["グラタン・ドフィノワ","https://www.bbcgoodfood.com/search?q=Gratin%20dauphinois"],"mais":["焼きトウモロコシ","https://www.bbcgoodfood.com/search?q=Grilled%20corn%20on%20the%20cob"],"petit-pois":["プチポワ・ア・ラ・フランセーズ","https://www.bbcgoodfood.com/search?q=French-style%20peas"],"haricot-vert":["サヤインゲンのガーリックソテー","https://www.bbcgoodfood.com/search?q=Garlic%20green%20beans"],"potiron":["カボチャのスープ","https://www.bbcgoodfood.com/search?q=Squash%20soup"],"ail":["ニンニクのスープ","https://www.bbcgoodfood.com/search?q=Garlic%20soup"],"oignon":["オニオングラタンスープ","https://www.bbcgoodfood.com/search?q=French%20onion%20soup"],"champignon":["マッシュルームのガーリックソテー","https://www.bbcgoodfood.com/search?q=Garlic%20mushrooms"],"patate-douce":["サツマイモのマッシュ","https://www.bbcgoodfood.com/search?q=Sweet%20potato%20mash"],"fraise":["イチゴのタルト","https://www.bbcgoodfood.com/search?q=Strawberry%20tart"],"cerise":["サクランボのクラフティ","https://www.bbcgoodfood.com/search?q=Cherry%20clafoutis"],"peche":["モモのロースト","https://www.bbcgoodfood.com/search?q=Roasted%20peaches"],"melon":["メロンとフェタのサラダ","https://www.bbcgoodfood.com/search?q=Melon%20feta%20salad"],"pasteque":["スイカとフェタのサラダ","https://www.bbcgoodfood.com/search?q=Watermelon%20feta%20salad"],"myrtille":["ブルーベリーマフィン","https://www.bbcgoodfood.com/search?q=Blueberry%20muffins"],"raisin":["ブドウのクラフティ","https://www.bbcgoodfood.com/search?q=Grape%20clafoutis"],"pomme":["タルト・タタン","https://www.bbcgoodfood.com/search?q=Tarte%20tatin"],"poire":["洋ナシのポシェ","https://www.bbcgoodfood.com/search?q=Poached%20pears"],"chataigne":["栗のスープ","https://www.bbcgoodfood.com/search?q=Chestnut%20soup"],"kiwi":["フルーツサラダ","https://www.bbcgoodfood.com/search?q=Fruit%20salad"],"clementine":["クレメンタインの砂糖漬け","https://www.bbcgoodfood.com/search?q=Candied%20clementines"],"orange":["オレンジのサラダ","https://www.bbcgoodfood.com/search?q=Orange%20salad"],"citron":["レモンメレンゲパイ","https://www.bbcgoodfood.com/search?q=Lemon%20meringue%20pie"],"avocat":["ワカモレ","https://www.bbcgoodfood.com/search?q=Guacamole"],"banane":["バナナブレッド","https://www.bbcgoodfood.com/search?q=Banana%20bread"],"ananas":["パイナップルのロースト","https://www.bbcgoodfood.com/search?q=Roasted%20pineapple"],"mangue":["マンゴーラッシー","https://www.bbcgoodfood.com/search?q=Mango%20lassi"],"basilic":["バジルペスト","https://www.bbcgoodfood.com/search?q=Basil%20pesto"],"menthe":["タブレ","https://www.bbcgoodfood.com/search?q=Tabbouleh"],"persil":["チミチュリ","https://www.bbcgoodfood.com/search?q=Chimichurri"],"ciboulette":["チャイブのオムレツ","https://www.bbcgoodfood.com/search?q=Chive%20omelette"],"thym":["タイムとレモンのローストチキン","https://www.bbcgoodfood.com/search?q=Roast%20chicken%20with%20thyme%20and%20lemon"],"gingembre":["ニンジンのショウガ風味","https://www.bbcgoodfood.com/search?q=Ginger%20carrots"]};
  var RSEARCH = 'https://www.bbcgoodfood.com/search?q=';
  var NEN = {"carotte":"Carrot","tomate":"Tomato","aubergine":"Aubergine","courgette":"Courgette","concombre":"Cucumber","poivron":"Pepper","piment":"Chilli","brocoli":"Broccoli","chou":"Cabbage","laitue":"Lettuce","epinard":"Spinach","pomme-de-terre":"Potato","mais":"Sweetcorn","petit-pois":"Pea","haricot-vert":"Green bean","potiron":"Squash","ail":"Garlic","oignon":"Onion","champignon":"Button mushroom","patate-douce":"Sweet potato","fraise":"Strawberry","cerise":"Cherry","peche":"Peach","melon":"Melon","pasteque":"Watermelon","myrtille":"Blueberry","raisin":"Grape","pomme":"Apple","poire":"Pear","chataigne":"Chestnut","kiwi":"Kiwi","clementine":"Clementine","orange":"Orange","citron":"Lemon","avocat":"Avocado","banane":"Banana","ananas":"Pineapple","mangue":"Mango","basilic":"Basil","menthe":"Mint","persil":"Parsley","ciboulette":"Chives","thym":"Thyme","gingembre":"Ginger","asperge":"Asparagus","radis":"Radish","framboise":"Raspberry","abricot":"Apricot","prune":"Plum","figue":"Fig","betterave":"Beetroot","poireau":"Leek","chou-fleur":"Cauliflower","endive":"Chicory","rhubarbe":"Rhubarb","cassis":"Blackcurrant","coing":"Quince","artichaut":"Artichoke","fenouil":"Fennel","navet":"Turnip","panais":"Parsnip","coriandre":"Coriander","romarin":"Rosemary","estragon":"Tarragon","feve":"Broad bean","haricot-coco":"Coco bean","flageolet":"Flageolet bean","lentille":"Lentil","pois-chiche":"Chickpea","haricot-sec":"Dried bean"};
  var FAM_ID = {"セリ科":"apiacees","ナス科":"solanacees","ウリ科":"cucurbitacees","アブラナ科":"brassicacees","キク科":"asteracees","ヒユ科":"amaranthacees","イネ科":"poacees","マメ科":"fabacees","ヒガンバナ科":"amaryllidacees","ハラタケ科":"agaricacees","ヒルガオ科":"convolvulacees","バラ科":"rosacees","ツツジ科":"ericacees","ブドウ科":"vitacees","ブナ科":"fagacees","マタタビ科":"actinidiacees","ミカン科":"rutacees","クスノキ科":"lauracees","バショウ科":"musacees","パイナップル科":"bromeliacees","ウルシ科":"anacardiacees","シソ科":"lamiacees","ショウガ科":"zingiberacees","キジカクシ科":"asparagacees","クワ科":"moracees","タデ科":"polygonacees","スグリ科":"grossulariacees"};
  function recette750(p) { var r = RECETTES[p.s]; var nom = (NEN[p.s] || p.n).toLowerCase(); return { titre: r ? r[0] : '', url: r ? (r[1] || RSEARCH + encodeURIComponent(r[0])) : '', toutes: RSEARCH + encodeURIComponent(nom), has: !!r }; }
  function norm(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }

  window.SAISON = { recette750: recette750, produits: produits, lexique: lexique, MOIS: MOIS, MOIS_C: MOIS_C, TYPES: TYPES, ORIG: ORIG, url: url, vis: vis, bySlug: bySlug, norm: norm, FAM_ID: FAM_ID, lang: 'en' };
})();
