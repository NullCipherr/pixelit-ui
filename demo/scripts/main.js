"use strict";

// Helpers gerados na transpilação para compatibilidade de iteração/espalhamento.
function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
    }
}

function _iterableToArray(e) {
    if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e);
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}

var px = new pixelit({
        from: document.getElementById("pixelitimg")
    }),
    // Paletas nativas disponíveis na interface.
    paletteList = [
        [
            [7, 5, 5],
            [33, 25, 25],
            [82, 58, 42],
            [138, 107, 62],
            [193, 156, 77],
            [234, 219, 116],
            [160, 179, 53],
            [83, 124, 68],
            [66, 60, 86],
            [89, 111, 175],
            [107, 185, 182],
            [251, 250, 249],
            [184, 170, 176],
            [121, 112, 126],
            [148, 91, 40],
        ],
        [
            [13, 43, 69],
            [32, 60, 86],
            [84, 78, 104],
            [141, 105, 122],
            [208, 129, 89],
            [255, 170, 94],
            [255, 212, 163],
            [255, 236, 214],
        ],
        [
            [43, 15, 84],
            [171, 31, 101],
            [255, 79, 105],
            [255, 247, 248],
            [255, 129, 66],
            [255, 218, 69],
            [51, 104, 220],
            [73, 231, 236],
        ],
        [
            [48, 0, 48],
            [96, 40, 120],
            [248, 144, 32],
            [248, 240, 136],
        ],
        [
            [239, 26, 26],
            [172, 23, 23],
            [243, 216, 216],
            [177, 139, 139],
            [53, 52, 65],
            [27, 26, 29],
        ],
        [
            [26, 28, 44],
            [93, 39, 93],
            [177, 62, 83],
            [239, 125, 87],
            [255, 205, 117],
            [167, 240, 112],
            [56, 183, 100],
            [37, 113, 121],
            [41, 54, 111],
            [59, 93, 201],
            [65, 166, 246],
            [115, 239, 247],
            [244, 244, 244],
            [148, 176, 194],
            [86, 108, 134],
            [51, 60, 87],
        ],
        [
            [44, 33, 55],
            [118, 68, 98],
            [237, 180, 161],
            [169, 104, 104],
        ],
        [
            [171, 97, 135],
            [235, 198, 134],
            [216, 232, 230],
            [101, 219, 115],
            [112, 157, 207],
            [90, 104, 125],
            [33, 30, 51],
        ],
        [
            [140, 143, 174],
            [88, 69, 99],
            [62, 33, 55],
            [154, 99, 72],
            [215, 155, 125],
            [245, 237, 186],
            [192, 199, 65],
            [100, 125, 52],
            [228, 148, 58],
            [157, 48, 59],
            [210, 100, 113],
            [112, 55, 127],
            [126, 196, 193],
            [52, 133, 157],
            [23, 67, 75],
            [31, 14, 28],
        ],
        [
            [94, 96, 110],
            [34, 52, 209],
            [12, 126, 69],
            [68, 170, 204],
            [138, 54, 34],
            [235, 138, 96],
            [0, 0, 0],
            [92, 46, 120],
            [226, 61, 105],
            [170, 92, 61],
            [255, 217, 63],
            [181, 181, 181],
            [255, 255, 255],
        ],
        [
            [49, 31, 95],
            [22, 135, 167],
            [31, 213, 188],
            [237, 255, 177],
        ],
        [
            [21, 25, 26],
            [138, 76, 88],
            [217, 98, 117],
            [230, 184, 193],
            [69, 107, 115],
            [75, 151, 166],
            [165, 189, 194],
            [255, 245, 247],
        ],
    ],
    currentPalette = 0,
    // Mantido para compatibilidade com possíveis extensões de paleta customizada.
    addPalette = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = JSON.parse(localStorage.getItem("customPalettes"));
        null == t && (t = []), t.push(e), localStorage.setItem("customPalettes", JSON.stringify(t));
    },
    pullFromLocalStorage = function() {
        var e = JSON.parse(localStorage.getItem("customPalettes"));
        return null == e && (e = []), e;
    },
    rgbToInt = function(e) {
        return [parseInt(e.substring(1, 3), 16), parseInt(e.substring(3, 5), 16), parseInt(e.substring(5, 7), 16)];
    },
    removeDuplicates = function(e) {
        for (var t = [], r = 0; r < e.length; r++) - 1 == t.indexOf(e[r]) && t.push(e[r]);
        return t;
    };
document.addEventListener("DOMContentLoaded", function() {
    // Referências de controles da UI.
    var t = document.querySelector("#blocksize"),
        r = document.querySelector("#greyscale"),
        n = document.querySelector("#palette"),
        q = document.getElementById("pixelcrisp"),
        A = document.getElementById("pixelgrid"),
        a = document.querySelector("#maxheight"),
        o = document.querySelector("#maxwidth"),
        i = document.getElementById("paletteselector"),
        l = document.getElementById("palettecolor"),
        c = document.getElementById("invert"),
        d = document.getElementById("sepia"),
        s = document.getElementById("scanlines"),
        u = document.getElementById("brightness"),
        m = document.getElementById("contrast"),
        f = document.getElementById("brightnessvalue"),
        p = document.getElementById("contrastvalue"),
        g = document.getElementById("pixelitcanvas"),
        h = null,
        v = document.getElementById("pixlInput"),
        b = document.getElementById("filename-display"),
        y = document.getElementById("outputformat"),
        w = "pixelit-output";
    // Upload: atualiza fonte de imagem e nome exibido ao usuário.
    v.onchange = function(t) {
        var r = new Image();
        this.files &&
            this.files[0] &&
            ((w = this.files[0].name.replace(/\.[^/.]+$/, "") || "pixelit-output"),
            b && (b.textContent = this.files[0].name),
            (r.src = URL.createObjectURL(this.files[0]))),
        (r.onload = function() {
            px.setFromImgSource(r.src), C();
        });
    };
    // Renderiza mini preview de cores da paleta selecionada.
    var x = function(e) {
            if (l) {
                l.innerHTML = "";
                var t = paletteList[e] || [];
                t.forEach(function(e) {
                    var t = document.createElement("div");
                    (t.className = "colorblock"), (t.style.backgroundColor = "rgba(".concat(e[0], ",").concat(e[1], ",").concat(e[2], ",1)")), l.appendChild(t);
                });
            }
        },
        // Pós-processamento no canvas (efeitos avançados e overlays de leitura).
        k = function() {
            if (g && g.getContext) {
                var e = g.getContext("2d", {
                        willReadFrequently: !0
                    }),
                    r = g.width,
                    n = g.height;
                if (r && n) {
                    var a = e.getImageData(0, 0, r, n),
                        o = a.data,
                        i = Number(u.value || 0),
                        l = Number(m.value || 0),
                        f = (259 * (l + 255)) / (255 * (259 - l));
                    for (var p = 0; p < o.length; p += 4) {
                        var v = o[p],
                            b = o[p + 1],
                            y = o[p + 2];
                        if (c.checked && ((v = 255 - v), (b = 255 - b), (y = 255 - y)), d.checked) {
                            var w = 0.393 * v + 0.769 * b + 0.189 * y,
                                x = 0.349 * v + 0.686 * b + 0.168 * y,
                                k = 0.272 * v + 0.534 * b + 0.131 * y;
                            (v = Math.min(255, w)), (b = Math.min(255, x)), (y = Math.min(255, k));
                        }
                        (v = Math.max(0, Math.min(255, v + i))),
                        (b = Math.max(0, Math.min(255, b + i))),
                        (y = Math.max(0, Math.min(255, y + i))),
                        (v = Math.max(0, Math.min(255, f * (v - 128) + 128))),
                        (b = Math.max(0, Math.min(255, f * (b - 128) + 128))),
                        (y = Math.max(0, Math.min(255, f * (y - 128) + 128))),
                        (o[p] = v),
                        (o[p + 1] = b),
                        (o[p + 2] = y);
                    }
                    if (e.putImageData(a, 0, 0), s.checked) {
                        e.save(), (e.fillStyle = "rgba(0, 0, 0, 0.12)");
                        for (var C = 1; C < n; C += 3) e.fillRect(0, C, r, 1);
                        e.restore();
                    }
                    if (A && A.checked) {
                        e.save(), (e.strokeStyle = "rgba(18, 23, 34, 0.2)"), (e.lineWidth = 1);
                        for (var S = Number(t.value || 7), _ = S; _ < r; _ += S) e.beginPath(), e.moveTo(_ + 0.5, 0), e.lineTo(_ + 0.5, n), e.stroke();
                        for (var E = S; E < n; E += S) e.beginPath(), e.moveTo(0, E + 0.5), e.lineTo(r, E + 0.5), e.stroke();
                        e.restore();
                    }
                }
            }
        },
        // Pipeline principal: pixelização base + efeitos + ajustes de saída.
        C = function() {
            document.querySelector(".loader").classList.toggle("active"),
                clearTimeout(h),
                (h = setTimeout(function() {
                    document.querySelector(".loader").classList.toggle("active");
                }, 800)),
                px.setScale(t.value).setPalette(paletteList[currentPalette]).draw().pixelate(),
                r.checked && px.convertGrayscale(),
                n.checked && px.convertPalette(),
                a.value && px.setMaxHeight(a.value).resizeImage(),
                o.value && px.setMaxWidth(o.value).resizeImage(),
                q && q.checked ? ((g.style.imageRendering = "pixelated"), (g.style.webkitFontSmoothing = "none")) : (g.style.imageRendering = "auto"),
                k();
        },
        // Exporta usando o formato definido em "Saída" (PNG, JPEG ou WEBP).
        S = function() {
            if (g) {
                var e = y && y.value ? y.value : "png",
                    t = {
                        png: "image/png",
                        jpeg: "image/jpeg",
                        webp: "image/webp",
                    } [e] || "image/png",
                    r = e;
                if ("function" == typeof g.toBlob)
                    return void g.toBlob(
                        function(e) {
                            if (!e) return void px.saveImage();
                            var t = URL.createObjectURL(e),
                                n = document.createElement("a");
                            (n.href = t), (n.download = "".concat(w, ".").concat(r)), document.body.appendChild(n), n.click(), n.remove(), URL.revokeObjectURL(t);
                        },
                        t,
                        "png" === e ? void 0 : 0.92
                    );
                var n = g.toDataURL(t, "png" === e ? void 0 : 0.92),
                    a = document.createElement("a");
                (a.href = n), (a.download = "".concat(w, ".").concat(r)), document.body.appendChild(a), a.click(), a.remove();
            }
        };
    // Inicializa o seletor nativo de paletas com dados locais + padrão.
    !(function() {
        var e = pullFromLocalStorage();
        if (paletteList = [].concat(_toConsumableArray(paletteList), _toConsumableArray(e)), i) {
            i.innerHTML = '<option value="">-- Selecione uma paleta --</option>';
            for (var t = 0; t < paletteList.length; t++) {
                var r = document.createElement("option");
                (r.value = t), (r.textContent = "Paleta ".concat(t + 1, " (").concat(paletteList[t].length, " cores)")), i.appendChild(r);
            }
        }
        x(currentPalette);
    })(),
    i &&
        i.addEventListener("change", function() {
            "" !== this.value && ((currentPalette = Number(this.value)), (n.checked = !0), x(currentPalette), C());
        }),
    // Vincula todos os controles ao pipeline principal para feedback em tempo real.
    t.addEventListener("change", function(t) {
        (document.querySelector("#blockvalue").innerText = this.value), C();
    }),
    r.addEventListener("change", C),
    n.addEventListener("change", C),
    q && q.addEventListener("change", C),
    A && A.addEventListener("change", C),
    a.addEventListener("change", C),
    o.addEventListener("change", C),
    c.addEventListener("change", C),
    d.addEventListener("change", C),
    s.addEventListener("change", C),
    u.addEventListener("input", function() {
        f.innerText = this.value, C();
    }),
    m.addEventListener("input", function() {
        p.innerText = this.value, C();
    }),
    document.querySelector("#downloadimage").addEventListener("click", function(e) {
        S();
    }),
    C();
});
