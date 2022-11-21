function display(val){

    document.getElementById('result').value += val

    return val;

}
function reset(){
    display.remove(val);
}