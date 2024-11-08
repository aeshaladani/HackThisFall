const searchBar = document.forms['search-box'].querySelector('input');
searchBar.addEventListener('keyup', function (e) {
    const term = e.target.value.toLocaleLowerCase();
    const searchs = document.getElementsByClassName('description');
    $("#part1").toggle($('input').val().length == 0);
    var notfound = document.getElementById('notfound');
    var hasResults = false;
    Array.from(searchs).forEach(function (search) {
        const title = search.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            search.parentNode.parentNode.parentNode.style.display = 'block';
            $('.load-more').hide();
            hasResults = true;
        } else {
            search.parentNode.parentNode.parentNode.style.display = 'none';
        }
    });
    notfound.style.display = hasResults ? 'none' : 'block';
});



$(document).ready(function () {
    $(".load-more").click(function () {
        $("#part201").css({
            "display": "block"
        })
        $("#part202").css({
            "display": "block"
        })
        $("#part203").css({
            "display": "block"
        })
        $("#part204").css({
            "display": "block"
        })
        $("#part205").css({
            "display": "block"
        })
        $("#part206").css({
            "display": "block"
        })
        $("#part207").css({
            "display": "block"
        })
        $("#part208").css({
            "display": "block"
        })
        $("#part209").css({
            "display": "block"
        })
        $("#part210").css({
            "display": "block"
        })
        $("#part211").css({
            "display": "block"
        })
        $("#part212").css({
            "display": "block"
        })
        $("#part213").css({
            "display": "block"
        })
        $("#part214").css({
            "display": "block"
        })
        $("#part215").css({
            "display": "block"
        })
        $('.load-more').css({
            "display": "none"
        })
    })
})



$(document).ready(function () {
    like01 = 0;
    $("#like01").click(function () {
        if (like01 == 0) {
            $("#like01").css({
                "color": "red",
            });
            like01 = 1;
        } else if (like01 == 1) {
            $("#like01").css({
                "color": "grey"
            });
            like01 = 0;
        }
    });
});


$(document).ready(function () {
    like02 = 0;
    $("#like02").click(function () {
        if (like02 == 0) {
            $("#like02").css({
                "color": "red",
            });
            like02 = 1;
        } else if (like02 == 1) {
            $("#like02").css({
                "color": "grey"
            });
            like02 = 0;
        }
    });
});


$(document).ready(function () {
    like03 = 0;
    $("#like03").click(function () {
        if (like03 == 0) {
            $("#like03").css({
                "color": "red",
            });
            like03 = 1;
        } else if (like03 == 1) {
            $("#like03").css({
                "color": "grey"
            });
            like03 = 0;
        }
    });
});


$(document).ready(function () {
    like04 = 0;
    $("#like04").click(function () {
        if (like04 == 0) {
            $("#like04").css({
                "color": "red",
            });
            like04 = 1;
        } else if (like04 == 1) {
            $("#like04").css({
                "color": "grey"
            });
            like04 = 0;
        }
    });
});


$(document).ready(function () {
    like05 = 0;
    $("#like05").click(function () {
        if (like05 == 0) {
            $("#like05").css({
                "color": "red",
            });
            like05 = 1;
        } else if (like05 == 1) {
            $("#like05").css({
                "color": "grey"
            });
            like05 = 0;
        }
    });
});


$(document).ready(function () {
    like06 = 0;
    $("#like06").click(function () {
        if (like06 == 0) {
            $("#like06").css({
                "color": "red",
            });
            like06 = 1;
        } else if (like06 == 1) {
            $("#like06").css({
                "color": "grey"
            });
            like06 = 0;
        }
    });
});


$(document).ready(function () {
    like07 = 0;
    $("#like07").click(function () {
        if (like07 == 0) {
            $("#like07").css({
                "color": "red",
            });
            like07 = 1;
        } else if (like07 == 1) {
            $("#like07").css({
                "color": "grey"
            });
            like07 = 0;
        }
    });
});


$(document).ready(function () {
    like08 = 0;
    $("#like08").click(function () {
        if (like08 == 0) {
            $("#like08").css({
                "color": "red",
            });
            like08 = 1;
        } else if (like08 == 1) {
            $("#like08").css({
                "color": "grey"
            });
            like08 = 0;
        }
    });
});


$(document).ready(function () {
    like09 = 0;
    $("#like09").click(function () {
        if (like09 == 0) {
            $("#like09").css({
                "color": "red",
            });
            like09 = 1;
        } else if (like09 == 1) {
            $("#like09").css({
                "color": "grey"
            });
            like09 = 0;
        }
    });
});


$(document).ready(function () {
    like10 = 0;
    $("#like10").click(function () {
        if (like10 == 0) {
            $("#like10").css({
                "color": "red",
            });
            like10 = 1;
        } else if (like10 == 1) {
            $("#like10").css({
                "color": "grey"
            });
            like10 = 0;
        }
    });
});


$(document).ready(function () {
    like11 = 0;
    $("#like11").click(function () {
        if (like11 == 0) {
            $("#like11").css({
                "color": "red",
            });
            like11 = 1;
        } else if (like11 == 1) {
            $("#like11").css({
                "color": "grey"
            });
            like11 = 0;
        }
    });
});


$(document).ready(function () {
    like12 = 0;
    $("#like12").click(function () {
        if (like12 == 0) {
            $("#like12").css({
                "color": "red",
            });
            like12 = 1;
        } else if (like12 == 1) {
            $("#like12").css({
                "color": "grey"
            });
            like12 = 0;
        }
    });
});


$(document).ready(function () {
    like13 = 0;
    $("#like13").click(function () {
        if (like13 == 0) {
            $("#like13").css({
                "color": "red",
            });
            like13 = 1;
        } else if (like13 == 1) {
            $("#like13").css({
                "color": "grey"
            });
            like13 = 0;
        }
    });
});


$(document).ready(function () {
    like14 = 0;
    $("#like14").click(function () {
        if (like14 == 0) {
            $("#like14").css({
                "color": "red",
            });
            like14 = 1;
        } else if (like14 == 1) {
            $("#like14").css({
                "color": "grey"
            });
            like14 = 0;
        }
    });
});


$(document).ready(function () {
    like15 = 0;
    $("#like15").click(function () {
        if (like15 == 0) {
            $("#like15").css({
                "color": "red",
            });
            like15 = 1;
        } else if (like15 == 1) {
            $("#like15").css({
                "color": "grey"
            });
            like15 = 0;
        }
    });
});


$(document).ready(function () {
    like16 = 0;
    $("#like16").click(function () {
        if (like16 == 0) {
            $("#like16").css({
                "color": "red",
            });
            like16 = 1;
        } else if (like16 == 1) {
            $("#like16").css({
                "color": "grey"
            });
            like16 = 0;
        }
    });
});


$(document).ready(function () {
    like17 = 0;
    $("#like17").click(function () {
        if (like17 == 0) {
            $("#like17").css({
                "color": "red",
            });
            like17 = 1;
        } else if (like17 == 1) {
            $("#like17").css({
                "color": "grey"
            });
            like17 = 0;
        }
    });
});


$(document).ready(function () {
    like18 = 0;
    $("#like18").click(function () {
        if (like18 == 0) {
            $("#like18").css({
                "color": "red",
            });
            like18 = 1;
        } else if (like18 == 1) {
            $("#like18").css({
                "color": "grey"
            });
            like18 = 0;
        }
    });
});


$(document).ready(function () {
    like19 = 0;
    $("#like19").click(function () {
        if (like19 == 0) {
            $("#like19").css({
                "color": "red",
            });
            like19 = 1;
        } else if (like19 == 1) {
            $("#like19").css({
                "color": "grey"
            });
            like19 = 0;
        }
    });
});


$(document).ready(function () {
    like20 = 0;
    $("#like20").click(function () {
        if (like20 == 0) {
            $("#like20").css({
                "color": "red",
            });
            like20 = 1;
        } else if (like20 == 1) {
            $("#like20").css({
                "color": "grey"
            });
            like20 = 0;
        }
    });
});


$(document).ready(function () {
    like21 = 0;
    $("#like21").click(function () {
        if (like21 == 0) {
            $("#like21").css({
                "color": "red",
            });
            like21 = 1;
        } else if (like21 == 1) {
            $("#like21").css({
                "color": "grey"
            });
            like21 = 0;
        }
    });
});


$(document).ready(function () {
    like22 = 0;
    $("#like22").click(function () {
        if (like22 == 0) {
            $("#like22").css({
                "color": "red",
            });
            like22 = 1;
        } else if (like22 == 1) {
            $("#like22").css({
                "color": "grey"
            });
            like22 = 0;
        }
    });
});


$(document).ready(function () {
    like23 = 0;
    $("#like23").click(function () {
        if (like23 == 0) {
            $("#like23").css({
                "color": "red",
            });
            like23 = 1;
        } else if (like23 == 1) {
            $("#like23").css({
                "color": "grey"
            });
            like23 = 0;
        }
    });
});


$(document).ready(function () {
    like24 = 0;
    $("#like24").click(function () {
        if (like24 == 0) {
            $("#like24").css({
                "color": "red",
            });
            like24 = 1;
        } else if (like24 == 1) {
            $("#like24").css({
                "color": "grey"
            });
            like24 = 0;
        }
    });
});


$(document).ready(function () {
    like25 = 0;
    $("#like25").click(function () {
        if (like25 == 0) {
            $("#like25").css({
                "color": "red",
            });
            like25 = 1;
        } else if (like25 == 1) {
            $("#like25").css({
                "color": "grey"
            });
            like25 = 0;
        }
    });
});


$(document).ready(function () {
    like26 = 0;
    $("#like26").click(function () {
        if (like26 == 0) {
            $("#like26").css({
                "color": "red",
            });
            like26 = 1;
        } else if (like26 == 1) {
            $("#like26").css({
                "color": "grey"
            });
            like26 = 0;
        }
    });
});


$(document).ready(function () {
    like27 = 0;
    $("#like27").click(function () {
        if (like27 == 0) {
            $("#like27").css({
                "color": "red",
            });
            like27 = 1;
        } else if (like27 == 1) {
            $("#like27").css({
                "color": "grey"
            });
            like27 = 0;
        }
    });
});


$(document).ready(function () {
    like28 = 0;
    $("#like28").click(function () {
        if (like28 == 0) {
            $("#like28").css({
                "color": "red",
            });
            like28 = 1;
        } else if (like28 == 1) {
            $("#like28").css({
                "color": "grey"
            });
            like28 = 0;
        }
    });
});



$(document).ready(function () {
    like29 = 0;
    $("#like29").click(function () {
        if (like29 == 0) {
            $("#like29").css({
                "color": "red",
            });
            like29 = 1;
        } else if (like29 == 1) {
            $("#like29").css({
                "color": "grey"
            });
            like29 = 0;
        }
    });
});


$(document).ready(function () {
    cat = 0;
    $(".All-category").click(function () {
        if (cat == 0) {
            $("#All-category").css({
                "display": "block",
            });
            $(".fa-angle-down").css({
                "transform": "rotate(180deg)",
            });
            cat = 1;
        } else if (cat == 1) {
            $("#All-category").css({
                "display": "none"
            });
            $(".fa-angle-down").css({
                "transform": "rotate(0deg)",
            });
            cat = 0;
        }
    });
});

function showdiv() {
    var select_status = $('#messagetype').val();

    if (select_status == 'all') {
        $('.my-card').show();
        $('.load-more').hide();
    } else if (select_status == 'india') {
        $('.india').show();
        $('.kochi').hide();
        $('.kerala').hide();
        $('.tamil-nadu').hide();
        $('.load-more').hide();
    } else if (select_status == 'kochi') {
        $('.india').hide();
        $('.kochi').show();
        $('.kerala').hide();
        $('.tamil-nadu').hide();
        $('.load-more').hide();
    } else if (select_status == 'kerala') {
        $('.india').hide();
        $('.kochi').hide();
        $('.kerala').show();
        $('.tamil-nadu').hide();
        $('.load-more').hide();
    } else if (select_status == 'tamil-nadu') {
        $('.india').hide();
        $('.kochi').hide();
        $('.kerala').hide();
        $('.tamil-nadu').show();
        $('.load-more').hide();
    }

}



$(document).ready(function () {
    $(".login,.sell-botton").click(function () {
            $("#login-page").css({
                "display": "flex"
            })
            $("body").css({"overflow":"hidden"});
    });
});

$(document).ready(function () {
    $(".close-button").click(function () {
            $("#login-page").css({
                "display": "none"
            })
            $("body").css({"overflow":"visible"});
    });
});
