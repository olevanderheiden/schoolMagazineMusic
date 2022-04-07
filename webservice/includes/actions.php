<?php
/**
 * @return array
 */
function getMusic()
{
    return [
        [
            "id" => 1,
            "name" => "Ashita Eno Kisesiki",
            "fileSource" => "tcs4Op",
        ],
        [
            "id" => 2,
            "name" => "Changing World From the Abyss",
            "fileSource" => "tcs4Op2",
        ],
        [
            "id" => 3,
            "name" => "Beyond Ten Millions of Nights",
            "fileSource" => "tcs4Concert",
        ],
        [
            "id" => 4,
            "name" => "Ai No Ulta",
            "fileSource" => "tcs4Ed",
        ],
        [
            "id" => 5,
            "name" => "Nayuta No Hoshi No Monogata",
            "fileSource" => "nayutaOp",
        ],
        [
            "id" => 6,
            "name" => "The Door to Adventure",
            "fileSource" => "nayutaOp2",
        ],
        [
            "id" => 7,
            "name" => "Beyond the Everlasting Time",
            "fileSource" => "nayutaMainMenu",
        ],
        [
            "id" => 8,
            "name" => "Nayuta No OmoiKanako Kotera",
            "fileSource" => "nayutaEd",
        ],
        [
            "id" => 9,
            "name" => "Twilight's Ingress",
            "fileSource" => "monarkMainMenu",
        ],
        [
            "id" => 10,
            "name" => "Nihil",
            "fileSource" => "monarkOp",
        ],
        [
            "id" => 11,
            "name" => "Your Hope, Your Wish",
            "fileSource" => "monarkEd",
        ],
        [
            "id" => 12,
            "name" => "Greed",
            "fileSource" => "monarkGreed",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDetails($id)
{
    $tags = [
        1 => [
            "fileSourceSize" => "12.4 MB",
            "Artist" => ["Falcom Sound Team Jdk"],
            "fileSource" => "tcs4Op"
        ],
        2 => [
            "fileSourceSize" => "5.55 MB",
            "Artist" => ["Falcom Sound Team Jdk"],
            "fileSource" => "tcs4Op2"
        ],
        3 => [
            "fileSourceSize" => "7.89 MB",
            "Artist" => ["Falcom Sound Team Jdk"],
            "fileSource" => "tcs4Concert"
        ],
        4 => [
            "fileSourceSize" => "15.2 MB",
            "Artist" => ["Falcom Sound Team Jdk"],
            "fileSource" => "tcs4Ed"
        ],
        5 => [
            "fileSourceSize" => "5.00 MB",
            "Artist" => ["Falcom Sound Team Jdk"],
            "fileSource" => "nayutaOp"
        ],
        6 => [
            "fileSourceSize" => "4.85 MB",
            "Artist" => ["Falcom Sound Team Jdk"],
            "fileSource" => "nayutaOp2"
        ],
        7 => [
            "fileSourceSize" => "4.71 MB",
            "Artist" => ["Falcom Sound Team Jdk"],
            "fileSource" => "nayutaMainMenu"
        ],
        8 => [
            "recipe" => "10.7 MB",
            "Artist" => ["Falcom Sound Team Jdk"],
            "fileSource" => "nayutaEd"
        ],
        9 => [
            "recipe" => "6.46 MB",
            "Artist" => ["Furyu Sound Team"],
            "fileSource" => "monarkMainMenu"

        ],
        10 => [
            "recipe" => "3.64 MB",
            "Artist" => ["KAF"],
            "fileSource" => "monarkOp"
        ],
        11 => [
            "recipe" => "4.34 MB",
            "Artist" => ["CIEL"],
            "fileSource" => "monarkEd"
        ],
        12 => [
            "recipe" => "5.17 MB",
            "Artist" => ["KOKO"],
            "fileSource" => "monarkGreed"
        ]
    ];

    return $tags[$id];
}
