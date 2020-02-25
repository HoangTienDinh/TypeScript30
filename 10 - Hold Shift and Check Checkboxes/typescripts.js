var checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
var lastChecked;
function handleCheck(e) {
    var _this = this;
    var inBetween = false;
    if (this.checked) {
        if (e.shiftKey) {
            checkboxes.forEach(function (checkbox) {
                if (checkbox === _this || checkbox === lastChecked) {
                    inBetween = !inBetween;
                }
                if (inBetween) {
                    checkbox.checked = true;
                }
            });
        }
        lastChecked = this;
    }
}
checkboxes.forEach(function (checkbox) { return checkbox.addEventListener('click', handleCheck); });
