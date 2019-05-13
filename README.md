
# Počítadlo životů pro karetní hry <br /> <small>Tutorial pro React a související technologie</small>

Cílem tohoto tutoriálu je provést vás postupem vytváření single-page webové aplikace založené na knihovně *React*,
a to od úplného začátku po minimální funkční produkt.

Ukázkovým zadáním je vytvořit jednoduchou webovou aplikaci, která bude počítat životy dvou
hráčům karetní hry _Magic the Gathering_ (nebo jakékoliv jiné, u které se musí počítat nějaká hodnota pro dva hráče).
Aplikace bude fungovat tak, že nejprve vyzve k zadání jména a počátečního počtu životů pro oba hráče,
po kliknutí na tlačítko Start zobrazí přes celou obrazovku počítadla pro oba hráče.
Z hlediska vzhledu by se aplikace měla dobře zobrazovat především na mobilu.

Při zpracování tohoto ukázkového zadání se naučíte základy Reactu, seznámíte se s balíčkovacím systémem *npm*, naučíte se
používat *Git* a *GitHub* a vyzkoušíte si práci s testovacím frameworkem [Cypress](https://www.cypress.io). 

Tento tutoriál je zpracován formou Git repozitáře, což má své důvody:
- V Gitu je zaznamenána historie úprav, které byly provedeny, což je z didaktického hlediska ideální.
- Repozitář si můžete sami tzv. [forknout](https://help.github.com/en/articles/fork-a-repo) a trackovat tak vlastní postup,
porovnávat svůj kód se vzorovou větví a příp. se vracet zpět kdybyste se ztratili.
- A také se v průběhu naučíte základy práce s Gitem, protože jako programátor se s ním budete setkávat prakticky denně 😉

_Tutorial vznikl v rámci studia na Přírodovědecké Fakultě Jihočeské Univerzity v Českých Budějovicích jako demo pro výukové účely.
Licence kódu i dokumentace: MIT._

## Jak pracovat s tímto tutoriálem 

Repozitář je rozdělen do dvou větví:

- **master** - Hlavní, prázdná větev ve které můžete pracovat.
- **solution** - V této větvi najdete vzorové řešení, co kapitola to _commit_. Můžete se do ní podívat pokud se zaseknete, příp. si můžete
[cherry-picknout](https://cs.atlassian.com/git/tutorials/cherry-pick) příslušný commit.

Tutoriál je rozdělen do několika lekcí. Každá představuje úkol, na základě kterého modifikujete kód z lekce předchozí a 
přidáte do něj něco nového. Abyste si mohli ověřit správnost vašeho řešení, je pro každou kapitolu připraven test.

Testování využívá framework [Cypress](https://www.cypress.io), který funguje v podstatě jako automatizovaný webový prohlížeč
(odborně řečeno _"provádí automatizované integrační testy"_) a po spuštění testu provádí danou proceduru stylem: "otevři stránku,
doplň do daného pole tento text, pak klikni na toto tlačko a podívej se zda aplikace (ne)udělala, co měla, atd..."
**Testovacímu frameworku je tudíž úplně jedno, jak je aplikace uvnitř napsaná a na jaké technologii je založená - zkoumá pouze její
konečný výstup**.

Díky tomu máte volné pole působnosti a každou lekci můžete vyřešit zcela po svém.
Má to ale jeden háček: Aby testovací framework věděl, kam má kliknout a co sledovat, je nutné mu příslušné prvky
označit pomocí [data atrubutu](http://lmgtfy.com/?q=html+data+attributes) _data-cy="..."_. Předpis těchto atributů najdete v popisu každé kapitoly.

Protože se domníváme, že pro praxi programátora je důležitá samostatnost ve vyhledávání informací a schopnost porozumět cizímu 
kódu a použít jej, jsou instrukce k lekcím velmi stručné - pouze zadání úkolu + nutné technické detaily + odkazy do
dokumentace k probíranému tématu.

> **Smyslem tutoriálu není tupě zopakovat přesnou posloupnost kroků, ale vyhledat si relevantní informace a s pomocí nich dospět k vlastnímu řešení.**

(Jak by to ostatně mělo být ve výuce informatiky obecně 😈 V praxi totiž obvykle dokumentace neexistuje a vše si stejně musíte dohledat sami)


<img src="https://www.agitma.nl/wp/wp-content/uploads/2016/07/Dilbert_Training_Agile_Programming.png" width="800" />

## Začínáme

Předtím, než se pustíte do práce bude potřeba:

- Mít nainstalovaný [Node.js](https://nodejs.org/en/)
- Mít účet na [GitHubu](https://github.com/join?source=pricing-card-free), pokud ještě nemáte
- Mít nainstalované IDE dle vlastní volby, ve kterém budete pracovat (lze doporučit [WebStorm](https://www.jetbrains.com/webstorm/)
nebo [VS Code](https://code.visualstudio.com/))
- Volitelně mít nainstalovaný [Git Bash](https://gitforwindows.org/) (pokud nemáte editor s podporou Gitu nebo se chcete
pocvičit v práci s Gitem přes příkazovou řádku)

Poté:
- [Forkněte](https://help.github.com/en/articles/fork-a-repo) si tento repozitář
- Naklonujte si forknutý repozitář do svého lokálního stroje - buď pomocí [Git Bash](https://help.github.com/en/articles/cloning-a-repository)
nebo pomocí [IDE](https://www.jetbrains.com/help/idea/set-up-a-git-repository.html?section=Windows%20or%20Linux#clone-repo) (nebo jakéhokoliv jiného nástroje pro práci s Gitem)
- Nainstalujte npm balíčky příkazem `npm install` (všechny příkazy provádějte v adresáři projektu)

Nyní byste měli být schopni projekt spustit příkazem `npm start`, příp. spustit [pomocí IDE](https://www.jetbrains.com/help/webstorm/installing-and-removing-external-software-using-node-package-manager.html#ws_npm_running_scripts_from_editor)

Aplikace se spustí ve developer modu, na adrese [http://localhost:3000](http://localhost:3000). Pokud provedete v kódu změny,
aplikace se vám v prohlížeči automaticky reloaduje. V konzoli poté uvidíte chyby a varování.

Doporučujeme do prohlížeče přidat rozšíření [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi),
které vám umožní aplikaci lépe ladit. Pokud vše funguje, můžete pokračovat dál.

Na konci každé lekce si můžete správnost svého řešení ověřit testem, který spustíte příkazem `npm run test_(číslo kapitoly)`
**v jiné konzoli než vám běží aplikace spuštěná přes `npm start`** - test a aplikace musí běžet společně, aby měl test
co testovat, příp. spusťte test [pomocí IDE](https://www.jetbrains.com/help/webstorm/installing-and-removing-external-software-using-node-package-manager.html#ws_npm_running_scripts_from_editor)
 
# Postup

## Lekce 0

Hurá! První lekci již máte hotovou. 😎

První krok, který spočívá v založení React projektu, jsme již udělali za vás. Použili jsme při tom
nástroj [Create React App](https://facebook.github.io/create-react-app/docs/getting-started), který založení nového projektu zjednodušuje na nezbytné minimum
a celé prostředí se všemi soubory pro vás připraví. Po založení projektu jsme repozitář očistili od souborů, které nebudeme potřebovat.

Díky použití Gitu si můžete všechny kroky (tedy commity), které jsme provedli zpětně prohlédnout. Kouzelný je zvláště
nástroj GitHubu [compare](https://help.github.com/en/articles/comparing-commits-across-time), který rozdíly mezi commity
přehledně zobrazí - klikněte na odkaz v závorce. Ještě lepší je prohlížet změny přímo v
IDE ([Log Tab ve WebStormu](https://www.jetbrains.com/help/phpstorm/log-tab.html?section=Windows%20or%20Linux)).

Rekapitulace postupu, který jsme provedli:
- Vytvořili repozitář pro projekt ([commit][init-1])
- Provedli inicializaci příkazem `npx create-react-app react-tutorial` ([commit][init-2])
- Přidali do _.gitignore_ pracovní soubory použitého IDE ([commit][init-3])
- Odebrali soubory, které pro nás nejsou relevantní ([commit][init-4])
- Přidali testovací framework a soubory s testy ([commit][init-5])

[init-1]:(https://github.com/dhs-mag/react-tutorial/commit/d70e9e8df8c3a3a158dd4da6022736a16f0fc983)
[init-2]:(https://github.com/dhs-mag/react-tutorial/commit/e24b31506df0745c52fae97fa30192dfdb47c6c9)
[init-3]:(https://github.com/dhs-mag/react-tutorial/commit/5416e708c6babf61711260a9948de2a1d81a09d7)
[init-4]:(https://github.com/dhs-mag/react-tutorial/commit/05dc364e92d93653c4fcaf1872c2be4203bb521f)
[init-5]:(https://github.com/dhs-mag/react-tutorial/commit/870d3ce9cc82291a59bbb95e90d6bbf9fe70468a)

Vysvětlení adresářové struktury a funkci jednotlivých souborů najdete (jak jinak) [v dokumentaci](https://facebook.github.io/create-react-app/docs/folder-structure).

Pokud jste to ještě nezkoušeli, spusťte aplikaci příkazem `npm start` a ověřte, zda vám běží. Toto je jediný "test" k této kapitole.

## Lekce 1

> **Úkol:** Základní funkční aplikace je počítat hráčům životy. Vytvořte komponentu počítadla s tlačítky pro inkrementaci a dekrementaci.

**Tipy a odkazy:**
- V Reactu je všechno komponenta, komponenty mohou obsahovat další komponenty, jedna komponenta se může použít vícekrát.
- Komponenta může mít svůj vnitřní stav (_state_) a atributy (_props_) kterými se dají předat data zvenku.
- Komponenta je povahou buď funkce (_stateless component_) nebo třída (_statefull copoment_) která má vlastní životní cyklus. 
- Syntaxe, kterou soubory Reactu používají se jmenuje [JSX](https://reactjs.org/docs/introducing-jsx.html) a míchá Javascript a HTML.
- Stav počítadla uchovávejte v komponentě.
- [React - Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [React - Components and Props](https://reactjs.org/docs/components-and-props.html)
- [React - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

**Atributy pro test:**
- `data-cy="val-1"` - Element, který zobrazuje číselnou hodnotu počítadla
- `data-cy="inc-1"` - Element tlačítka, které po kliknutí inkrementuje počítadlo
- `data-cy="dec-1"` - Element tlačítka, které po kliknutí dekrementuje počítadlo

Své řešení otestujete příkazem: `npm run test_1`

## Lekce 2


> **Úkol:** Vytvořte prototyp komponenty formuláře se dvěma inputy pro jméno hráče a počet počátečních životů.
Umístěte jí vedle komponenty počítadla s pomocí stylů. Data z fomuláře budeme zpracovávat v další kapitole.

**Tipy a odkazy:**
- [React - Forms](https://reactjs.org/docs/forms.html)
- [React FAQ - Styling and CSS](https://reactjs.org/docs/faq-styling.html)
- [React - DOM Elements - style](https://reactjs.org/docs/dom-elements.html#style)
- [Using Inline styles in JSX](https://blog.cloudboost.io/using-inline-styles-in-jsx-c1d03cbe6fe0)

**Atributy pro test:**
- `data-cy="player-1-name"` - Input pro jméno hráče
- `data-cy="player-1-hp"` - Input počet počátečních životů

Své řešení otestujete příkazem: `npm run test_2`

## Lekce 3

> **Úkol:** Propojte obě komponenty z předchozího kroku tak, aby se data z formuláře předávala při jejich změně do počítadla.

**Tipy a odkazy:**
- Stav formuláře si uchovávejte v nadřazené komponentě jak formuláře, tak počítadla.
- K předání dat do počítadla použijte _props_ - s nimi inicializujete counter a vykreslíte jméno.
- K odečtení dat z formuláře se skvěle hodí události _onChange_ nebo _onInput_
- I funkce se dají předávat přes _props_, proto handler těchto událostí může být v nadřazené komponentě, která drží stav.
- [React - Forms](https://reactjs.org/docs/forms.html)
- [React - Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [React - Components and Props](https://reactjs.org/docs/components-and-props.html)

**Atributy pro test:**
- _(žádné nové se nepřidávají)_

Své řešení otestujete příkazem: `npm run test_3`

## Lekce 4

> **Úkol:** Přidejte _conditional rendering_ tak, aby se nejprve zobrazil formulář,
po stisknutí tlačítka Start se zobrazilo počítadlo s vyplněnými hodnotami.

**Tipy a odkazy:**
- Informaci, zda je hra odstartovaná lze uchovat jako bool proměnou v nadřazené komponentě a poté vykreslit patřičnou subkomponentu.
- Komponenty typu třída mají životní cyklus - podívejte se, co se děje při _conditinal renderingu_. 
- Inicializaci counteru je ideální provést hned v konstruktoru.
- [React - Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [React - State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [React - Handling Events](https://reactjs.org/docs/handling-events.html)

**Atributy pro test:**
- _(žádné nové se nepřidávají)_

Své řešení otestujete příkazem: `npm run test_4`

## Lekce 5

> **Úkol:** Využijte stávající komponenty a rozšiřte aplikaci o druhého hráče.
Využijte conditional rendering a rozdělte aplikaci na dvě obrazovky (úvodní obrazovku s formuláři a hrací desku s počítadly), na hrací desku
přidejte tlačítko Zpět pro návrat na úvodní obrazovku s formuláři.

**Tipy a odkazy:**
- Na uchování více objektů stejného typu se skvěle hodí pole, další hráče pak přidáte jednoduše.
- Pro vykreslení se dá použít cyklus, nebo ještě lépe _projekce_.
- Prvky pole mají číselný index - využijte jej pro rozlišení jednotlivých hráčů a ke zobecnění kódu.
- Protože v Reactu je všechno komponenta, udělejte obě obrazovky jako samostatné komponenty, mezi kterými budete přepínat.
- [React - Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
- [React - Handling Events](https://reactjs.org/docs/handling-events.html)

**Atributy pro test:**

Všechny atributy tak, aby index v atributu odpovídal číslu hráče:

- `data-cy="val-1"` - Element, který zobrazuje číselnou hodnotu počítadla **prvního** hráče 
- `data-cy="inc-1"` - Element tlačítka, které po kliknutí inkrementuje počítadlo **prvního** hráče 
- `data-cy="dec-1"` - Element tlačítka, které po kliknutí dekrementuje počítadlo **prvního** hráče 
- `data-cy="player-1-name"` - Input pro jméno **prvního** hráče 
- `data-cy="player-1-hp"` - Input počet počátečních životů **prvního** hráče 
- `data-cy="val-2"` - Element, který zobrazuje číselnou hodnotu počítadla **druhého** hráče 
- `data-cy="inc-2"` - Element tlačítka, které po kliknutí inkrementuje počítadlo **druhého** hráče 
- `data-cy="dec-2"` - Element tlačítka, které po kliknutí dekrementuje počítadlo **druhého** hráče 
- `data-cy="player-2-name"` - Input pro jméno **druhého** hráče 
- `data-cy="player-2-hp"` - Input pro počet počátečních životů **druhého** hráče 

Své řešení otestujete příkazem: `npm run test_5`

## Lekce 6

> **Úkol:** Na mobilu by bylo vhodné, aby se herní plocha rozdělila vertikálně na dvě poloviny, do každé umístit počítadlo
pro jednoho hráče a horní polovinu otočit o 180° - aby oba proti sobě sedící hráči dobře viděli na své počítadlo, když
se telefon položí na stůl mezi ně. Nastylujte aplikaci v tomto smyslu.

**Tipy a odkazy:**
- [Using Inline styles in JSX](https://blog.cloudboost.io/using-inline-styles-in-jsx-c1d03cbe6fe0)
- [MDN - Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [MDN - The transform CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [MDN - The Window interface's matchMedia() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [MDN - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

**Atributy pro test:**
- _(žádné nové se nepřidávají)_

Své řešení otestujete příkazem: `npm run test_6`

## Lekce 7

> **Úkol:** Všimněte si, že v komponentě počítadla se míchá business logika s vykreslením (vzhledem). Obě tyto věci je vhodné oddělit kvůli přehlednosti
a možnému znovupoužití. Vydělte proto logiku počítadla do samostatné HOC (_higher-order komponenty_).

**Tipy a odkazy:**
- HOC komponenty se obvykle pojmenovávají tak, aby jejich jméno začínalo na _With..._ (takže např. _WithCounter_)
- Po vydělení logiky můžete komponentu počítadla dregradovat na funkčí typ, tedy "hloupou" komponentu.
- [MDN - Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)

**Atributy pro test:**
- _(žádné nové se nepřidávají)_

Své řešení otestujete příkazem: `npm run test_7`

## Lekce 8

> **Úkol:** Všimněte si, že při navigaci mezi jednotlivými pohledy se nemění URL v adresním řádku prohlížeče. To má jeden 
nepříjemný praktický následek - nelze se odkázat na konkrétní stav aplikace (nemůžete nikomu poslat odkaz tak, abys se
aplikace otevřela ve stavu jaký vidíte vy - vždy se spustí od začátku. V reálné aplikaci je proto nutné zavést routování,
obvykle se řeší externím nástrojem. Proto naistalujte balíček `react-router-dom`, zapojte ho do aplikace a uchovávejte hodnoty
předávané z formuláře hrací ploše v routě - aby se na počáteční stav dalo odkázat.

**Tipy a odkazy:**
- Pro přidávání balíčku do projektu slouží příkaz `npm install` s parametrem `--save` ([dokuemntace](https://docs.npmjs.com/cli/install),
[dokumentace IDE](https://www.jetbrains.com/help/webstorm/installing-and-removing-external-software-using-node-package-manager.html#ws_npm_command_line_installation))
- Podívejte se do dokumentace React Routeru zejména na komponenty _BrowserRouter_ a _Switch_.
- K URL parametrům můžete v komponentách přistupovat přes objekt `match.params`, viz dokumentace.
- Využijte znalosti nabyté v přechozích lekcích a vydělte si logiku zpracování routovacích parametrů z hrací desky do samostatné HOC.
- [React Router - Quick Start](https://reacttraining.com/react-router/web/guides/quick-start)
- [React Router - Basic Components](https://reacttraining.com/react-router/web/guides/basic-components)
- [React Router - API - match](https://reacttraining.com/react-router/web/api/match)

**Atributy pro test:**
- _(žádné nové se nepřidávají)_

Své řešení otestujete příkazem: `npm run test_8`

## Lekce 9 - BONUS

> **Úkol:** Jako bonusový úkol můžete vyzkoušet novou feature Reactu verze 16.8 a vyšší, tzv. _Hooks_, které značně usnadňují a zpřehledňují 
práci s interním stavem komponent. Upravte komponenty aplikace, které používají lokální _state_, aby používala hooky. 

**Tipy a odkazy:**
- [React - Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React - Using the State Hook](https://reactjs.org/docs/hooks-state.html)

**Atributy pro test:**
- _(žádné nové se nepřidávají)_

Své řešení otestujete příkazem: `npm run test_9`

## Lekce 10

> **Úkol:** Proveďte build a pochlubte se mamince ❤

**Tipy a odkazy:**
- Build aplikace provedete příkazem `npm run build`.
- Při buildu se veškerý kód vaší aplikace zkompiluje a zabalí do podoby, kterou můžete nahrát na webový server a aplikaci tak zpřístupnit světu.
- Výstup build procesu najdete v adresáři `build`, v podadresáři `build/static` najdete zkompilované JS a CSS soubory vaší aplikace.
- [React - Creating a Production Build](https://facebook.github.io/create-react-app/docs/production-build)


