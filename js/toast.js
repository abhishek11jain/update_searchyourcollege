// Style 1
document.getElementById("toast_1").onclick = function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast_1'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}


// Style 2
document.getElementById("toast_2").onclick = function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast_2'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}

// Style 3
document.getElementById("toast_3").onclick = function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast_3'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}

// Style 4
document.getElementById("toast_4").onclick = function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast_4'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}