var day = 5;

switch (day) {
    case 0:  case 1:
    document.write("today is no monday")
        break;
    case 2:
        document.write("today is wedday")
        break;
    case 3:
        document.write("today is thursday")
        break;
    case 4:
        document.write("today is friday")
        break;
    case 5:
        document.write("today is saturday")
        break;
    case 6:
        document.write("today is sunday")
        break;
   
    default:
        document.write("enter valid day")
}
document.write("<br>")

var age =31;

switch (true) {
    case (age >=15 && age<=20):
        document.write("you are eligible")
        break;
        case (age >=21 && age<=30):
            document.write("you are not eligible")
            break;
    default:
        document.write("enter valid age")
}