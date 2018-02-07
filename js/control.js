var misDatos = angular.module('app', []);
misDatos.controller('controlador', function($scope) {
    $scope.validationEmail = true;
    $scope.showMessaje = true;
    $scope.afirmation = "info";

    //-------contenido español--------
    $scope.t1 = "Inicio";
    $scope.t2 = "que hacemos";
    $scope.t3 = "tecnologias";
    $scope.t4 = "proyectos";
    $scope.t5 = "contactanos";
    $scope.sp_p1_t1 = "SERVICIOS INFORMÁTICOS";
    $scope.sp_p1_1 = "Utilizando nuestros servicios, conocerás nuevas tendencias del futuro de los negocios bajo sistemas y aplicaciones que falicitaran tu trabajo. Además contaráss con un servicio garantizado y personalizado.";
    $scope.sp_p2_t1 = "¿QUIENES SOMOS?";
    $scope.sp_p2_1 = "Somos una empresa boliviana, que nació con la intención de intentar ayudar a la sociedad, aplicando soluciones y ayudas tecnológicas a los problemas existentes. Empezando por aplicaciones de escritorio para tiendas, o para la administración de negocios y empresas, hasta páginas web dinámicas con las tecnologías más avanzadas.";
    $scope.sp_p2_2_1 = "Actualmente, contamos con personal bastante capacitado, en las mejores universidades del ámbito nacional, además de que dicho personal ha participado en competencias internaciones de programación competitiva ( ";
    $scope.sp_p2_2_2 = " ). Varios de nuestros desarrolladores tienen experiencia desarrollando sitios web para empresas en el extranjero, como freelancers";
    $scope.sp_p3_t1 = "PUBLICIDAD";
    $scope.sp_p3_1 = "Publica tu negocio ,vende productos a todo el mundo, o haz que el mundo sepa de tu negocio. Maneja a tu gusto el contenido de tu página.";
    $scope.sp_p3_t2 = "AUTOMATIZACIÓN";
    $scope.sp_p3_2 = "Ahora tu empresa será más fácil de manejar. Olvídate de guardar la informacion en hojas y archivos que se pueden perder o deteriorar, ahora podrás mantenerlos seguros y preparados para ser visualizados en cualquier momento: estadísticas, registros, envíos, depósitos, tranferencias en tiempo real, y más funcionalidades.";
    $scope.sp_p3_t3 = "DESARROLLO";
    $scope.sp_p3_3 = "Seguridad, comodidad para el cliente, y responsabilidad son algunas de las cualidades que nos representan como empresa.";
    $scope.sp_p4_0 = "nuestros servicios";
    $scope.sp_p4_1 = "Desarrollo de paginas web";
    $scope.sp_p4_2 = "Aplicaciones Moviles Android & IOS";
    $scope.sp_p4_3 = "Sistemas de información";
    $scope.sp_p4_4 = "Desarrollo de Base de Datos";
    $scope.sp_p4_5 = "Aplicaciones de escritorio";
    $scope.sp_p5_1 = "Machine Learning";
    $scope.sp_p5_2 = "Algoritmos";
    $scope.sp_p5_3 = "Servidores, Redes y Cableado Estructurado";
    $scope.sp_p5_4 = "Visión Artificial";
    $scope.sp_p5_5 = "Creación de Juegos Educativos";
    $scope.sp_p6_0 = "tecnologias en las que trabajamos";
    $scope.sp_p6_1 = "Paginas web";
    $scope.sp_p6_2 = "ver";
    $scope.sp_p6_3 = "Aplicaciones";
    $scope.sp_p6_4 = "Servidores";
    $scope.sp_p6_5 = "Base de Datos";
    $scope.sp_p7_0 = "Nuestros Proyectos";
    $scope.sp_p7_1 = "Venta de Computadoras";
    $scope.sp_p7_2 = "Servicios de marketing";
    $scope.sp_p7_3 = "Reserva de mesas";
    $scope.sp_p7_4 = "Kiosco Familiar";
    $scope.sp_p7_5 = "Embotelladora Cascada";
    $scope.sp_p7_6 = "Juego educativo";
    $scope.sp_p7_7 = "Horario de clases";
    $scope.sp_p7_8 = "Mapa camino";
    $scope.sp_p7_9 = "Reconocimiento de voz";
    $scope.sp_p8_0 = "contactanos";
    $scope.sp_p8_1 = "contactanos! dejanos conocer tus dudas y preguntas. te responderemos lo mas antes posible!";
    $scope.pl_p9_2 = "Nombre";
    $scope.pl_p9_3 = "Asunto";
    $scope.pl_p9_4 = "Descripcion";
    $scope.pl_p9_5 = "ENVIAR";
    $scope.TypeMessaje = "Llene los datos por favor";
    $scope.ps_p10_0 = "entre";
    //-------contenido ingles--------

    $scope.namelanguage = "ing";
    $scope.setLanguage = function() {
        if ($scope.namelanguage == "ing") {
            //contiene
            $scope.t1 = "Start";
            $scope.t2 = "What we are?";
            $scope.t3 = "Technologies";
            $scope.t4 = "works";
            $scope.t5 = "Contact us";
            $scope.sp_p1_t1 = "COMPUTER SCIENCE & IT SERVICES";
            $scope.sp_p1_1 = "By using our services, you will know new tendencies of the future of the business under systems and applications that will help you at your work. You will also have a guaranteed and personalized service.";
            $scope.sp_p2_t1 = "WHO WE ARE?";
            $scope.sp_p2_1 = "We are a Bolivian company, which was born with the intention of trying to help society, applying solutions and technological aids to existing problems. Starting with desktop applications for stores, or for business and corporate management, to dynamic web pages with the most advanced technologies.";
            $scope.sp_p2_2_1 = "Currently, we have a highly trained staff, in the best universities in the national scope. In addition, our staff has participated in international competitions of competitive programming ( ";
            $scope.sp_p2_2_2 = " ).Several of our developers have experience developing websites for some companies arround the world, as freelancers";
            $scope.sp_p3_t1 = "ADVERSTING";
            $scope.sp_p3_1 = "Publish your business, sell products to the whole world an let the world know of your business. Upload new content to your page by yourself!";
            $scope.sp_p3_t2 = "AUTOMATION";
            $scope.sp_p3_2 = "Now it is easier to manage your company. Stop saving your information in sheets and files that can be lost, now you can keep them safe and ready at your disposal: statistics, records, shipments, deposits, transfers in real time, among others.";
            $scope.sp_p3_t3 = "DEVELOPMENT";
            $scope.sp_p3_3 = "Safety, comfort, discipline is one of the qualities that characterizes us as a development company.";
            $scope.sp_p4_0 = "Our services";
            $scope.sp_p4_1 = "Web development";
            $scope.sp_p4_2 = "Mobile development (Android / IOS)";
            $scope.sp_p4_3 = "Information systems";
            $scope.sp_p4_4 = "Data base development";
            $scope.sp_p4_5 = "Desktop apps";
            $scope.sp_p5_1 = "Machine Learning";
            $scope.sp_p5_2 = "Algorithms";
            $scope.sp_p5_3 = "Servers & Networks";
            $scope.sp_p5_4 = "Artificial vision";
            $scope.sp_p5_5 = "Educatiional games development";
            $scope.sp_p6_0 = "We work on this technologies";
            $scope.sp_p6_1 = "Web pages";
            $scope.sp_p6_2 = "view";
            $scope.sp_p6_3 = "Apps";
            $scope.sp_p6_4 = "Servers";
            $scope.sp_p6_5 = "Database";
            $scope.sp_p7_0 = "Our projects";
            $scope.sp_p7_1 = "Computer shop";
            $scope.sp_p7_2 = "Marketing services";
            $scope.sp_p7_3 = "Restaurant reserves";
            $scope.sp_p7_4 = "Familiar shop";
            $scope.sp_p7_5 = "Bottler Cascada";
            $scope.sp_p7_6 = "Educational games";
            $scope.sp_p7_7 = "Schedule app";
            $scope.sp_p7_8 = "Map App";
            $scope.sp_p7_9 = "Voice recognition";
            $scope.sp_p8_0 = "Contact us";
            $scope.sp_p8_1 = "Contact us! Let us know your doubts and questions. For sure we will reply you soon! ";
            $scope.pl_p9_2 = "Name";
            $scope.pl_p9_3 = "Subject";
            $scope.pl_p9_4 = "Description";
            $scope.pl_p9_5 = "SEND";
            $scope.TypeMessaje = "Fill all the fields, please";
            $scope.namelanguage = "esp";
            $scope.ps_p10_0 = "between";

        } else {
            $scope.t1 = "Inicio";
            $scope.t2 = "que hacemos";
            $scope.t3 = "tecnologias";
            $scope.t4 = "proyectos";
            $scope.t5 = "contactanos";
            $scope.sp_p1_t1 = "SERVICIOS INFORMÁTICOS";
            $scope.sp_p1_1 = "Utilizando nuestros servicios, conocerás nuevas tendencias del futuro de los negocios bajo sistemas y aplicaciones que falicitaran tu trabajo. Además contaráss con un servicio garantizado y personalizado.";
            $scope.sp_p2_t1 = "¿QUIENES SOMOS?";
            $scope.sp_p2_1 = "Somos una empresa boliviana, que nació con la intención de intentar ayudar a la sociedad, aplicando soluciones y ayudas tecnológicas a los problemas existentes. Empezando por aplicaciones de escritorio para tiendas, o para la administración de negocios y empresas, hasta páginas web dinámicas con las tecnologías más avanzadas.";
            $scope.sp_p2_2_1 = "Actualmente, contamos con personal bastante capacitado, en las mejores universidades del ámbito nacional, además de que dicho personal ha participado en competencias internaciones de programación competitiva ( ";
            $scope.sp_p2_2_2 = " ). Varios de nuestros desarrolladores tienen experiencia desarrollando sitios web para empresas en el extranjero, como freelancers";
            $scope.sp_p3_t1 = "PUBLICIDAD";
            $scope.sp_p3_1 = "Publica tu negocio ,vende productos a todo el mundo, o haz que el mundo sepa de tu negocio. Maneja a tu gusto el contenido de tu página.";
            $scope.sp_p3_t2 = "AUTOMATIZACIÓN";
            $scope.sp_p3_2 = "Ahora tu empresa será más fácil de manejar. Olvídate de guardar la informacion en hojas y archivos que se pueden perder o deteriorar, ahora podrás mantenerlos seguros y preparados para ser visualizados en cualquier momento: estadísticas, registros, envíos, depósitos, tranferencias en tiempo real, y más funcionalidades.";
            $scope.sp_p3_t3 = "DESARROLLO";
            $scope.sp_p3_3 = "Seguridad, comodidad para el cliente, y responsabilidad son algunas de las cualidades que nos representan como empresa.";
            $scope.sp_p4_0 = "nuestros servicios";
            $scope.sp_p4_1 = "Desarrollo de paginas web";
            $scope.sp_p4_2 = "Aplicaciones Moviles Android & IOS";
            $scope.sp_p4_3 = "Sistemas de información";
            $scope.sp_p4_4 = "Desarrollo de Base de Datos";
            $scope.sp_p4_5 = "Aplicaciones de escritorio";
            $scope.sp_p5_1 = "Machine Learning";
            $scope.sp_p5_2 = "Algoritmos";
            $scope.sp_p5_3 = "Servidores, Redes y Cableado Estructurado";
            $scope.sp_p5_4 = "Visión Artificial";
            $scope.sp_p5_5 = "Creación de Juegos Educativos";
            $scope.sp_p6_0 = "tecnologias en las que trabajamos";
            $scope.sp_p6_1 = "Paginas web";
            $scope.sp_p6_2 = "ver";
            $scope.sp_p6_3 = "Aplicaciones";
            $scope.sp_p6_4 = "Servidores";
            $scope.sp_p6_5 = "Base de Datos";
            $scope.sp_p7_0 = "Nuestros Proyectos";
            $scope.sp_p7_1 = "Venta de Computadoras";
            $scope.sp_p7_2 = "Servicios de marketing";
            $scope.sp_p7_3 = "Reserva de mesas";
            $scope.sp_p7_4 = "Kiosco Familiar";
            $scope.sp_p7_5 = "Embotelladora Cascada";
            $scope.sp_p7_6 = "Juego educativo";
            $scope.sp_p7_7 = "Horario de clases";
            $scope.sp_p7_8 = "Mapa camino";
            $scope.sp_p7_9 = "Reconocimiento de voz";
            $scope.sp_p8_0 = "contactanos";
            $scope.sp_p8_1 = "contactanos! dejanos conocer tus dudas y preguntas. te responderemos lo mas antes posible!";
            $scope.pl_p9_2 = "Nombre";
            $scope.pl_p9_3 = "Asunto";
            $scope.pl_p9_4 = "Descripcion";
            $scope.pl_p9_5 = "ENVIAR";
            $scope.TypeMessaje = "Llene los datos por favor";
            $scope.namelanguage = "ing";
            $scope.ps_p10_0 = "entre";
        }
        console.log($scope.namelanguage);
    }
    $scope.enviar = function() {
        $scope.name = document.getElementById("name").value;
        $scope.email = document.getElementById("email").value;
        $scope.sudject = document.getElementById("sudject").value;
        $scope.description = document.getElementById("description").value;
        if ($scope.name.length > 0 && $scope.email.length > 0 && $scope.sudject.length > 0 && $scope.description.length > 0 && $scope.validationEmail) {
            $scope.afirmation = "success";
            if ($scope.namelanguage == "ing") {
                $scope.TypeMessaje = "Your message was succesfully sent!";
            } else {
                $scope.TypeMessaje = "Su Mensaje fue enviado con exito!";
            }

            //alert($scope.name + "-" + $scope.email + "-" + $scope.sudject + "-" + $scope.description);
        } else {
            $scope.afirmation = "danger";
            if ($scope.namelanguage == "esp") {
                $scope.TypeMessaje = "Wrong data! Please, verify it!";
            } else {
                $scope.TypeMessaje = "Datos Incorrectos! Verifique sus datos!";
            }

        }
    }
    $scope.getkeys = function(event) {
        $scope.keyval = String.fromCharCode(event.keyCode);
        var expreg = new RegExp("[A-Za-z]");
        var date = document.getElementById("name").value;
        if (!expreg.test($scope.keyval)) {
            document.getElementById("name").value = date.substr(0, date.length - 1);

        } else {
            //aumentar
        }
    }
    $scope.getkeysEmail = function(event) {
        $scope.keyval = String.fromCharCode(event.keyCode);
        var expreg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var date = document.getElementById("email").value;
        if (expreg.test(date)) {
            console.log("true");
            $scope.validationEmail = true;
        } else {
            //aumentar
            $scope.validationEmail = false;
            console.log("false");
        }
    }
});