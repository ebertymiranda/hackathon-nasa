var flag = 0;

var circle0;
var circle1;
var circle2;
var circle3;
var circle4;

function exibirCirculo() {

    flag = 1;
    circle0 = L.circle([-15.5989, -56.0545],
        {
            color: 'blue',
            fillColor: '#00f',
            fillOpacity: 0.5,
            radius: 100
        })
        .addTo(map);

    circle0.bindTooltip("informações incêndio");

    circle1 = L.circle([-15.5989, -56.0572],
        {
            color: 'blue',
            fillColor: '#00f',
            fillOpacity: 0.5,
            radius: 100
        })
        .addTo(map);
    circle1.bindTooltip("informações incêndio");

    circle2 = L.circle([-15.5919, -56.0615],
        {
            color: 'blue',
            fillColor: '#00f',
            fillOpacity: 0.5,
            radius: 100
        }).addTo(map);
    circle2.bindTooltip("informações incêndio");


    circle3 = L.circle([-15.5969, -56.0641],
        {
            color: 'blue',
            fillColor: '#00f',
            fillOpacity: 0.5,
            radius: 100
        }).addTo(map);
    circle3.bindTooltip("informações incêndio");

    circle4 = L.circle([-15.5983, -56.0649],
        {
            color: 'blue',
            fillColor: '#00f',
            fillOpacity: 0.5,
            radius: 100
        }).addTo(map);
    circle4.bindTooltip("informações incêndio");
}


function removerCirculos() {

    flag = 0;
    circle0.remove();
    circle1.remove();
    circle2.remove();
    circle3.remove();
    circle4.remove();
}

function alternaExibicao() {
    return flag == 1 ? removerCirculos() : exibirCirculo();
}