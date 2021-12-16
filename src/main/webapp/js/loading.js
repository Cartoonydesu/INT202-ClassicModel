
export function setLoading(on_off) {
    let loading = document.getElementById("loading");
    if (on_off == 'on') {
        loading.classList.remove("d-none");
        loading.classList.add("d-inline");
    } else {
        loading.classList.remove("d-inline");
        loading.classList.add("d-none");
    }
}