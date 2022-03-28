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
            "file" => "tcs4Op",
        ],
        [
            "id" => 2,
            "name" => "Changing World From the Abyss",
            "file" => "tcs4Op2",
        ],
        [
            "id" => 3,
            "name" => "Beyond Ten Millions of Nights",
            "file" => "tcs4Concert",
        ],
        [
            "id" => 4,
            "name" => "Ai No Ulta",
            "file" => "tcs4Ed",
        ],
        [
            "id" => 5,
            "name" => "Nayuta No Hoshi No Monogata",
            "file" => "nayutaOp",
        ],
        [
            "id" => 6,
            "name" => "The Door to Adventure",
            "file" => "nayutaOp2",
        ],
        [
            "id" => 7,
            "name" => "Beyond the Everlasting Time",
            "file" => "nayutaMainMenu",
        ],
        [
            "id" => 8,
            "name" => "Nayuta No OmoiKanako Kotera",
            "file" => "nayutaEd",
        ],
        [
            "id" => 9,
            "name" => "Twilight's Ingress",
            "file" => "monarkMainMenu",
        ],
        [
            "id" => 10,
            "name" => "Nihil",
            "file" => "monarkOp",
        ],
        [
            "id" => 11,
            "name" => "Your Hope, Your Wish",
            "file" => "monarkEd",
        ],
        [
            "id" => 12,
            "name" => "Greed",
            "file" => "monarkGreed",
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
            "fileSize" => "12.4 MB",
            "Artist" => ["Falcom Sound Team Jdk"]
        ],
        2 => [
            "fileSize" => "5.55 MB",
            "Artist" => ["Falcom Sound Team Jdk"]
        ],
        3 => [
            "fileSize" => "7.89 MB",
            "Artist" => ["Falcom Sound Team Jdk"]
        ],
        4 => [
            "fileSize" => "15.2 MB",
            "Artist" => ["Falcom Sound Team Jdk"]
        ],
        5 => [
            "fileSize" => "5.00 MB",
            "Artist" => ["Falcom Sound Team Jdk"]
        ],
        6 => [
            "fileSize" => "4.85 MB",
            "Artist" => ["Falcom Sound Team Jdk"]
        ],
        7 => [
            "fileSize" => "4.71 MB",
            "Artist" => ["Falcom Sound Team Jdk"]
        ],
        8 => [
            "recipe" => "10.7 MB",
            "Artist" => ["Falcom Sound Team Jdk"]
        ],
        9 => [
            "recipe" => "6.46 MB",
            "Artist" => ["Furyu Sound Team"]
        ],
        10 => [
            "recipe" => "3.64 MB",
            "Artist" => ["KAF"]
        ],
        11 => [
            "recipe" => "4.34 MB",
            "Artist" => ["CIEL"]
        ],
        12 => [
            "recipe" => "5.17 MB",
            "Artist" => ["KOKO"]
        ]
    ];

    return $tags[$id];
}
