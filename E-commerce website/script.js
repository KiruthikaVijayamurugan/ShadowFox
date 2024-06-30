let Home = document.getElementById("homesection");
let Menu = document.getElementById("menusection");
let Reward = document.getElementById("rewardsection");

function Homefn(){
    Home.classList.remove("nodisplay");
    Menu.classList.add("nodisplay");
    Reward.classList.add("nodisplay");
}

function Menunavfn(){
    Home.classList.add("nodisplay");
    Menu.classList.remove("nodisplay");
    Reward.classList.add("nodisplay");
}

function Rewardsfn(){
    Home.classList.add("nodisplay");
    Menu.classList.add("nodisplay");
    Reward.classList.remove("nodisplay");
}

let reward_img = document.getElementById("reward-food-img")
let reward_heading = document.getElementById("reward-food-text-h3")
let reward_para =document.getElementById("reward-food-text-p")
let btn20 = document.getElementById("btn-20")
let btn100 = document.getElementById("btn-100")
let btn200 = document.getElementById("btn-200")
let btn300 = document.getElementById("btn-300")
let btn400 = document.getElementById("btn-400")

function reward20(){
    btn20.classList.add("btn-active")
    btn100.classList.remove("btn-active")
    btn200.classList.remove("btn-active")
    btn300.classList.remove("btn-active")
    btn400.classList.remove("btn-active")

    reward_img.removeAttribute('src')
    reward_img.setAttribute('src','assets/25.png')
    reward_heading.textContent="Customize your drink"
    reward_para.textContent="Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup."
}
function reward100(){
    btn20.classList.remove("btn-active")
    btn100.classList.add("btn-active")
    btn200.classList.remove("btn-active")

    reward_img.removeAttribute('src')
    reward_img.setAttribute('src','assets/100.png')
    reward_heading.textContent="Brewed hot or iced coffee or tea, bakery item, packaged snack and more"
    reward_para.textContent="Treat yourself to an iced coffee, buttery croissant, bag of chips and more."
}
function reward200(){
    btn20.classList.remove("btn-active")
    btn100.classList.remove("btn-active")
    btn200.classList.add("btn-active")
    btn300.classList.remove("btn-active")
    btn400.classList.remove("btn-active")

    reward_img.removeAttribute('src')
    reward_img.setAttribute('src','assets/200.png')
    reward_heading.textContent="Handcrafted drink (Cold Brew, lattes and more) or hot breakfast"
    reward_para.textContent="Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us."
}
function reward300(){
    btn20.classList.remove("btn-active")
    btn100.classList.remove("btn-active")
    btn200.classList.remove("btn-active")
    btn300.classList.add("btn-active")
    btn400.classList.remove("btn-active")

    reward_img.removeAttribute('src')
    reward_img.setAttribute('src','assets/300.png')
    reward_heading.textContent="Sandwich, protein box or at-home coffee"
    reward_para.textContent="Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®."
}
function reward400(){
    btn20.classList.remove("btn-active")
    btn100.classList.remove("btn-active")
    btn200.classList.remove("btn-active")
    btn300.classList.remove("btn-active")
    btn400.classList.add("btn-active")

    reward_img.removeAttribute('src')
    reward_img.setAttribute('src','assets/400.png')
    reward_heading.textContent="Select Starbucks® merchandise"
    reward_para.textContent="Take home a signature cup, drink tumbler or your choice of coffee merch up to $20."
}

// ------------------------------------------------------------------------


let Hotcoffeesnav = document.getElementById("Hotcoffeesnav");
let Coldcoffeesnav = document.getElementById("Coldcoffeesnav");
let Refreshersnav = document.getElementById("Refreshersnav");
let Frappuccinonav = document.getElementById("Frappuccinonav");
let IcedTeaandLemonadenav = document.getElementById("IcedTeaandLemonadenav");
let Hotteasnav = document.getElementById("Hotteasnav");
let Morenav = document.getElementById("Morenav");
let BottledBeveragesnav = document.getElementById("BottledBeveragesnav");
let HotBreakfastnav = document.getElementById("HotBreakfastnav");
let OatmealYogurtnav = document.getElementById("OatmealYogurtnav");
let Bakerynav = document.getElementById("Bakerynav");
let Lunchnav = document.getElementById("Lunchnav");
let WholeBeannav = document.getElementById("WholeBeannav");
let VIAInstantnav = document.getElementById("VIAInstantnav");
let ColdCupsnav = document.getElementById("ColdCupsnav");
let Tumblersnav = document.getElementById("Tumblersnav");
let Mugsnav = document.getElementById("Mugsnav");
let WaterBottlesnav = document.getElementById("WaterBottlesnav");
let Othernav = document.getElementById("Othernav");

let Drinks = document.getElementById("Drinks");
let Hotcoffees = document.getElementById("Hotcoffees");
let Coldcoffees = document.getElementById("Coldcoffees");
let Refreshers = document.getElementById("Refreshers");
let Frappuccino = document.getElementById("Frappuccino");
let IcedTeaandLemonade = document.getElementById("IcedTeaandLemonade");
let Hotteas = document.getElementById("Hotteas");
let More = document.getElementById("More");
let BottledBeverages = document.getElementById("BottledBeverages");
let HotBreakfast = document.getElementById("HotBreakfast");
let OatmealYogurt = document.getElementById("OatmealYogurt");
let Bakery = document.getElementById("Bakery");
let Lunch = document.getElementById("Lunch");
let SnacksSweets = document.getElementById("SnacksSweets");
let WholeBean = document.getElementById("WholeBean");
let VIAInstant = document.getElementById("VIAInstant");
let ColdCups = document.getElementById("ColdCups");
let Tumblers = document.getElementById("Tumblers");
let Mugs = document.getElementById("Mugs");
let WaterBottles = document.getElementById("WaterBottles");
let Other = document.getElementById("Other");

function Menufn() {
    Drinks.classList.remove("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}

function Hotcoffeesfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.remove("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}

function Coldcoffeesfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.remove("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function Refreshersfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.remove("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function Frappuccinofn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.remove("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function IcedTeaandLemonadefn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.remove("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function Hotteasfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.remove("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function Morefn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.remove("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function BottledBeveragesfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.remove("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function HotBreakfastfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.remove("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function OatmealYogurtfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.remove("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function Bakeryfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.remove("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function Lunchfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.remove("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function SnacksSweetsfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.remove("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function WholeBeanfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.remove("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function VIAInstantfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.remove("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function ColdCupsfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.remove("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function Tumblersfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.remove("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function Mugsfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.remove("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.add("nodisplay");
}
function WaterBottlesfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.remove("nodisplay");
    Other.classList.add("nodisplay");
}
function Otherfn() {
    window.scrollTo(0, 0);
    Drinks.classList.add("nodisplay");
    Hotcoffees.classList.add("nodisplay");
    Coldcoffees.classList.add("nodisplay");
    Refreshers.classList.add("nodisplay");
    Frappuccino.classList.add("nodisplay");
    IcedTeaandLemonade.classList.add("nodisplay");
    Hotteas.classList.add("nodisplay");
    More.classList.add("nodisplay");
    BottledBeverages.classList.add("nodisplay");
    HotBreakfast.classList.add("nodisplay");
    OatmealYogurt.classList.add("nodisplay");
    Bakery.classList.add("nodisplay");
    Lunch.classList.add("nodisplay");
    SnacksSweets.classList.add("nodisplay");
    WholeBean.classList.add("nodisplay");
    VIAInstant.classList.add("nodisplay");
    ColdCups.classList.add("nodisplay");
    Tumblers.classList.add("nodisplay");
    Mugs.classList.add("nodisplay");
    WaterBottles.classList.add("nodisplay");
    Other.classList.remove("nodisplay");
}