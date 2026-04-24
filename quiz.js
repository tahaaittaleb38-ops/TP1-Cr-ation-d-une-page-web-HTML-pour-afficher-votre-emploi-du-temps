let QUESTIONS = [
        ["À quand remonte la dernière victoire de l'Allemagne en Coupe du monde ?", "2014"],
        ["Combien de Ballons d'Or Messi a-t-il remportés ?", "8"],
        ["Barcelone est-elle la meilleure équipe de l'histoire ? (oui/non)", "oui"],
        ["Pays avec le plus de Coupes du Monde ?", "bresil"],
        ["Qui sont les Blaugrana ?", "Barcelone"],
        ["Surnom de l'Espagne ?", "La Roja"],
        ["Quel joueur africain a remporté le Ballon d'Or en 1995 ?", "Weah"],
        ["Quel pays a gagné la première Coupe du Monde en 1930 ?", "Uruguay"],
        ["Dans quelle ville se trouve le stade San Siro ?", "Milan"],
        ["Quel club anglais est surnommé Les Reds ?", "Liverpool"],
    ];

    function Quiz() {

        let score = 0;
        for (let i = 0; i < QUESTIONS.length; i++) {

            let question = QUESTIONS[i][0];
            let bonneReponse = QUESTIONS[i][1];
            let reponseUtilisateur = prompt(question);

            if (reponseUtilisateur === bonneReponse) {
                alert("✔️✔️Réponse juste !✔️✔️");
                score++;
            } else {
                alert("❌❌Réponse fausse !❌❌");
            }
        }

        alert("Vous avez répondu correctement à " + score + " questions sur " + QUESTIONS.length);
    }
