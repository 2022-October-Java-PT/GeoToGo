const countries = [
    {
        name: "1",
        description: "a very awesome country",
        d:"M55 8750 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0 - 12 - 4 - 9 - 10z",
    },
    {
        name: "2",
        description: "a very awesome country",
        d: "M26 8726 c3 -9 11 -16 16 -16 13 0 5 23 -10 28 -7 2 -10 -2 -6 -12z",
    },
    {
        name: "Indonesia",
        description: "a very awesome country",
        d:"M70 8710 c-22 -22 -20 -50 5 -100 21 -41 170 -180 193 -180 12 0 33 -15 49 -36 15 -21 43 -54 61 -74 18 -21 32 -49 32 -62 0 -29 14 -43 50 -51 44 -11 122 -66 116 -83 -3 -8 8 -48 24 -90 17 -41 30 -83 30 -93 0 -13 13 -24 41 -35 28 -12 44 -26 54 -49 7 -17 30 -48 49 -66 20 -19 36 -42 36 -50 0 -9 18 -45 40 -81 22 -36 40 -77 40 -92 0 -17 16 -45 45 -79 25 -29 45 -56 45 -61 0 -4 23 -26 51 -48 29 -23 59 -55 68 -73 10 -20 48 -53 106 -92 49 -33 125 -96 168 -140 l78 -80 18 21 c13 16 25 20 44 17 23 -5 27 -2 27 18 0 22 2 21 35 -11 22 -21 39 -30 44 -24 12 12 28 193 20 225 -3 13 -1 36 3 51 6 16 6 34 0 45 -8 14 -6 25 9 43 24 33 24 57 -2 72 -11 7 -29 30 -40 50 -16 32 -25 38 -64 43 -25 4 -52 4 -61 1 -15 -6 -15 -4 -3 10 12 14 10 19 -14 38 -19 15 -29 36 -37 75 -5 29 -12 57 -15 62 -4 5 -26 9 -50 9 -31 0 -51 6 -69 23 -25 21 -25 23 -8 43 10 11 24 23 32 26 12 5 11 7 -4 13 -11 5 -21 3 -26 -6 -5 -7 -11 -11 -14 -8 -9 9 24 49 40 49 23 0 16 37 -12 59 -32 25 -40 26 -78 6 -25 -13 -27 -13 -16 -1 14 18 6 34 -24 46 -16 7 -17 9 -4 9 10 1 26 -8 37 -20 11 -13 24 -18 32 -14 9 6 7 12 -6 21 -10 8 -15 17 -12 21 11 10 -34 53 -55 53 -28 0 -21 -15 15 -33 17 -8 27 -16 21 -16 -6 -1 -28 11 -49 25 -30 20 -40 23 -46 12 -5 -7 -7 -19 -4 -26 3 -7 1 -11 -4 -8 -5 3 -12 18 -16 33 -9 39 -54 83 -84 84 -26 0 -26 0 -3 9 25 11 30 48 7 57 -9 3 -25 -3 -35 -12 -12 -11 -20 -13 -20 -7 0 20 -40 53 -58 50 -11 -2 -17 -13 -16 -27 1 -21 -1 -22 -11 -7 -7 9 -17 16 -22 16 -5 0 -19 18 -32 40 -12 22 -29 40 -37 40 -8 0 -14 6 -14 14 0 8 -13 25 -30 38 -16 12 -44 34 -62 48 -17 14 -46 34 -63 45 -17 11 -46 29 -63 40 -17 11 -33 31 -36 46 -3 16 -14 30 -26 34 -11 3 -20 14 -20 24 0 9 -15 32 -34 50 -33 32 -35 33 -133 35 -93 1 -102 3 -149 34 -28 17 -54 32 -57 32 -4 0 -16 -9 -27 -20z m1110 -790 c-8 -5 -24 -9 -35 -9 l-20 0 20 9 c11 5 27 9 35 9 13 1 13 0 0 -9z m293 -866 c3 -3 3 -13 0 -21 -5 -12 -7 -12 -14 -1 -15 23 -4 40 14 22z",
    },
    {
        name: "4",
        description: "a very awesome country",
        d:"M4717 8554 c-4 -4 -7 -17 -7 -29 0 -11 -5 -26 -11 -32 -9 -9 -8 -18 5 -37 17 -26 36 -35 36 -16 0 6 -4 10 -10 10 -15 0 -12 26 5 40 8 7 15 18 15 24 0 18 -25 48 -33 40z",
    },
    {
        name: "Malaysia",
        description: "a very awesome country",
        d:"M3087 8512 c-9 -10 -18 -44 -22 -77 -9 -84 -13 -93 -43 -107 -28 -14 -45 -68 -21 -68 6 0 -3 -10 -22 -23 -22 -15 -33 -30 -31 -42 2 -10 -4 -35 -13 -55 -15 -32 -19 -35 -50 -32 -19 2 -48 -3 -66 -12 -42 -21 -48 -20 -106 9 -43 22 -53 23 -96 14 -35 -8 -51 -17 -57 -34 -11 -29 -29 -36 -120 -46 -41 -4 -87 -10 -101 -14 -22 -6 -35 1 -83 47 -40 36 -60 63 -64 87 l-7 34 -33 -28 c-35 -30 -66 -80 -57 -94 3 -5 -1 -11 -7 -14 -23 -7 -14 -110 13 -146 20 -27 21 -35 11 -51 -16 -26 -15 -45 3 -60 8 -7 15 -21 15 -31 0 -13 7 -19 22 -19 17 0 19 -3 10 -12 -30 -30 5 -63 37 -34 16 15 19 15 36 -4 17 -19 17 -23 3 -54 -12 -25 -14 -36 -5 -45 14 -14 36 -96 37 -134 0 -26 2 -28 30 -22 19 4 30 3 30 -4 0 -10 144 -6 161 5 10 6 21 -45 14 -67 -8 -24 16 -26 50 -3 19 12 27 13 44 3 24 -16 62 1 81 36 12 23 12 23 32 3 11 -11 28 -18 38 -15 12 3 20 -2 24 -15 4 -18 10 -20 49 -14 58 9 97 -19 97 -69 0 -19 4 -36 8 -39 5 -3 39 10 78 28 38 18 79 36 92 40 12 4 22 14 22 21 0 8 3 16 8 18 4 3 5 -17 4 -44 -3 -38 -1 -49 11 -49 8 0 19 6 25 13 12 14 10 90 -3 120 -5 12 -2 22 10 31 12 9 16 21 13 39 -3 16 -1 24 5 20 12 -7 27 16 27 45 0 13 -6 22 -15 22 -12 0 -13 4 -6 18 7 12 7 22 0 29 -6 6 1 20 20 38 17 18 26 36 23 45 -5 12 -3 13 10 3 12 -11 19 -8 39 13 13 14 38 31 54 38 22 10 30 20 31 39 1 18 -3 27 -13 27 -13 0 -15 9 -9 46 8 61 41 134 60 134 9 0 16 4 16 10 0 6 9 6 26 0 48 -19 124 -6 124 19 0 5 -35 35 -77 67 -92 69 -96 74 -77 95 7 8 14 21 14 28 0 21 -80 131 -95 131 -11 0 -13 8 -8 30 4 21 2 30 -8 32 -8 0 6 4 30 7 54 7 64 27 22 42 -32 11 -39 23 -21 34 15 9 12 25 -4 19 -8 -3 -17 0 -21 6 -4 7 -48 10 -120 9 -92 -1 -116 -4 -128 -17z",
    },
    {
        name: "6",
        description: "a very awesome country",
        d:"M3376 8491 c-11 -4 -15 -10 -10 -14 14 -8 54 3 54 14 0 11 -17 11 -44 0z",
    },
    {
        name: "7",
        description: "a very awesome country",
        d:"M4560 8426 c0 -25 12 -46 26 -46 17 0 18 14 4 41 -12 22 -30 25 -30 5z",
    },
    {
        name: "8",
        description: "a very awesome country",
        d:"M3395 8400 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6 0 -7 -4 -4 -10z",
    },
    {
        name: "9",
        description: "a very awesome country",
        d:"M3357 8394 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z",
    },
    {
        name: "10",
        description: "a very awesome country",
        d:"M126 8305 c-6 -17 76 -74 107 -75 26 0 19 12 -31 54 -48 39 -67 44 -76 21z",
    },
    {
        name: "11",
        description: "a very awesome country",
        d:"M4510 8285 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0 -10 -7 -10 -15z",
    },
    {
        name: "12",
        description: "a very awesome country",
        d:"M4947 8255 c-24 -21 -26 -27 -15 -50 6 -14 19 -25 29 -25 40 0 66 91 29 97 -8 2 -27 -8 -43 -22z",
    },
    {
        name: "13",
        description: "a very awesome country",
        d:"M3506 8215 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7 -7 -4 -15z",
    },
    {
        name: "14",
        description: "a very awesome country",
        d:"M336 8204 c-4 -9 -3 -20 0 -23 4 -3 9 0 11 7 3 6 9 9 15 6 6 -4 9 -1 6 6 -7 21 -25 23 -32 4z",
    },
    {
        name: "15",
        description: "a very awesome country",
        d:"M255 8200 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0 -12 -4 -9 -10z",
    },
    {
        name: "16",
        description: "a very awesome country",
        d:"M4862 8182 c-35 -37 -60 -136 -41 -159 11 -12 10 -17 -4 -28 -16 -12 -16 -13 4 -26 16 -11 23 -29 28 -71 5 -48 12 -63 48 -102 59 -64 87 -62 39 3 -30 41 -36 57 -36 100 0 28 1 51 3 51 1 0 30 -9 65 -19 34 -11 62 -18 62 -16 0 22 -30 57 -58 68 l-35 14 35 21 c24 15 38 32 42 53 9 47 8 49 -22 49 -31 0 -75 -27 -70 -42 4 -12 -41 -62 -49 -55 -2 3 7 22 22 42 29 43 31 58 10 75 -13 11 -13 15 1 41 13 26 13 29 -2 29 -9 0 -28 -13 -42 -28z",
    },
    {
        name: "17",
        description: "a very awesome country",
        d:"M535 8130 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6 0 -7 -4 -4 -10z",
    },
    {
        name: "Malaysia",
        description: "a very awesome country",
        d:"M4443 8133 c-7 -2 -13 -11 -13 -18 0 -7 -9 -15 -20 -18 -11 -3 -20 -12 -20 -21 0 -9 -5 -16 -11 -16 -6 0 -23 -9 -38 -19 -24 -17 -42 -20 -137 -17 -61 1 -116 6 -122 10 -7 4 -37 10 -66 12 -29 3 -71 14 -92 24 -21 11 -45 20 -52 20 -19 0 -62 -46 -62 -66 0 -7 -6 -14 -13 -14 -21 0 -28 12 -16 27 6 7 8 13 4 13 -11 0 -65 -63 -65 -76 0 -7 -7 -15 -15 -18 -11 -4 -16 -19 -15 -48 1 -81 -5 -113 -23 -126 -34 -26 -59 -91 -53 -137 5 -31 3 -45 -9 -55 -8 -7 -15 -21 -15 -31 0 -10 -14 -35 -32 -54 -20 -24 -28 -39 -20 -44 6 -3 12 -29 14 -56 3 -52 6 -54 55 -40 15 5 24 3 26 -6 3 -8 10 -31 16 -52 13 -39 8 -83 -21 -180 -10 -34 -9 -40 12 -62 25 -26 54 -33 66 -14 4 7 22 9 45 6 38 -5 39 -4 32 21 -4 15 -7 36 -6 47 12 148 10 272 -3 292 -7 12 -14 24 -14 27 0 10 69 46 89 46 17 0 21 -6 21 -35 0 -20 -7 -47 -16 -61 -16 -24 -16 -25 25 -64 23 -22 48 -40 56 -40 17 0 19 -13 6 -56 -5 -17 -5 -37 0 -46 17 -31 107 -34 95 -3 -8 21 21 38 65 38 27 0 43 5 49 17 5 10 7 20 3 23 -3 3 7 5 22 4 15 -1 30 4 32 10 7 18 -26 28 -48 15 -15 -9 -24 -6 -56 21 -30 25 -37 38 -35 60 2 15 8 27 13 27 5 0 9 7 9 15 0 8 -4 15 -10 15 -5 0 -10 6 -10 14 0 7 -33 48 -73 89 -55 57 -67 75 -50 71 16 -4 31 0 46 13 12 11 36 25 54 32 17 7 50 33 72 57 37 41 71 57 71 34 0 -18 29 -10 40 11 18 32 -4 49 -61 49 -27 0 -49 -4 -49 -10 0 -5 -15 -10 -34 -10 -18 0 -39 -7 -46 -15 -15 -18 -67 -20 -73 -2 -3 7 -23 -6 -53 -35 -58 -56 -86 -59 -103 -11 -7 18 -18 33 -26 33 -21 0 -55 50 -55 81 0 44 29 105 55 117 15 7 35 8 54 2 16 -4 67 -7 113 -5 187 9 215 8 242 -10 21 -14 38 -16 84 -11 83 10 102 21 152 88 25 33 52 67 62 75 30 29 -7 63 -49 46z",
    },
    {
        name: "19",
        description: "a very awesome country",
        d:"M1060 8123 c0 -14 31 -39 58 -47 25 -8 31 14 9 32 -18 15 -67 26 -67 15z",
    },
    {
        name: "20",
        description: "a very awesome country",
        d:"M347 8101 c-16 -6 -12 -15 34 -74 41 -54 54 -65 65 -56 27 22 16 66 -23 104 -40 36 -46 38 -76 26z",
    },
    {
        name: "21",
        description: "a very awesome country",
        d:"M1340 8050 c0 -5 -10 -18 -22 -30 -12 -11 -19 -22 -17 -24 8 -9 49 6 43 15 -3 5 2 9 10 9 8 0 18 -9 21 -20 3 -11 11 -20 16 -20 13 0 11 34 -3 50 -11 12 -10 12 7 0 11 -8 25 -20 32 -28 16 -19 33 -7 33 23 0 14 -7 26 -17 29 -30 8 -103 5 -103 -4z",
    },
    {
        name: "22",
        description: "a very awesome country",
        d:"M1250 8040 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5 // 0 -9 -4 -9 -10z",
    },
    {
        name: "23",
        description: "a very awesome country",
        d:"M1408 7932 c8 -5 10 -16 6 -27 -6 -15 -4 -17 9 -12 16 6 16 4 2 -22 -8 -16 -21 -31 -30 -35 -13 -5 -14 -10 -5 -26 16 -30 55 -23 54 8 -1 19 3 22 22 18 23 -6 42 8 25 19 -6 3 -7 13 -4 23 6 15 5 15 -10 3 -15 -11 -17 -11 -17 1 0 16 -41 58 -56 58 -5 0 -3 -4 4 -8z",
    },
    {
        name: "24",
        description: "a very awesome country",
        d:"M5283 7875 c-35 -15 -42 -29 -18 -39 8 -3 12 -12 9 -21 -4 -10 0 -15 10 -15 9 0 16 5 16 10 0 6 7 10 15 10 8 0 15 4 15 8 0 4 16 6 35 4 26 -3 35 0 35 11 0 36 -67 55 -117 32z",
    },
    {
        name: "Papua New Guinea",
        description: "a very awesome country",
        d:"M5499 7811 c-24 -16 -61 -32 -81 -35 -30 -6 -38 -11 -38 -29 0 -12 -5 -29 -10 -37 -8 -12 -10 -9 -10 13 0 27 -12 33 -44 21 -21 -8 -20 -43 2 -51 9 -4 25 -15 36 -24 12 -12 28 -16 46 -12 33 6 80 -21 80 -46 0 -51 80 -75 207 -62 57 5 74 4 78 -7 7 -18 -4 -34 -17 -26 -6 4 -29 8 -51 10 -32 3 -46 -1 -65 -19 -20 -18 -33 -21 -77 -19 -29 2 -56 -1 -59 -6 -11 -18 5 -42 28 -42 29 -1 111 -76 91 -84 -8 -3 -15 -12 -15 -19 0 -24 42 -69 59 -64 9 2 22 -2 29 -10 7 -7 23 -13 35 -13 21 1 22 1 3 15 -11 8 -23 15 -28 15 -4 0 2 16 13 35 12 19 22 35 23 35 9 0 81 -42 81 -48 0 -11 58 -10 73 1 8 6 12 6 12 -1 0 -6 -6 -12 -12 -15 -10 -3 -10 -8 1 -21 24 -29 68 -46 118 -46 33 0 73 -11 127 -35 43 -18 92 -37 109 -41 16 -3 50 -19 75 -35 25 -16 52 -29 59 -29 7 0 13 -9 13 -20 0 -11 5 -20 11 -20 5 0 7 -4 4 -10 -3 -5 -2 -10 3 -10 5 0 12 -14 16 -31 6 -30 60 -91 101 -116 17 -9 13 -10 -22 -6 -50 7 -57 -8 -15 -32 15 -9 19 -14 10 -11 -10 3 -20 1 -23 -4 -4 -6 0 -10 8 -10 8 0 22 -10 33 -22 l19 -23 -22 19 c-25 21 -73 17 -111 -10 -20 -14 -82 -109 -82 -126 0 -5 27 -8 60 -8 57 0 61 2 100 43 38 38 41 40 35 16 -7 -28 7 -45 27 -33 6 4 35 8 65 10 29 1 59 7 67 13 9 8 12 6 12 -7 -1 -10 33 -50 76 -89 l77 -72 93 1 c51 0 105 -3 120 -7 19 -5 42 0 82 19 57 27 69 48 44 75 -11 11 -9 11 9 2 31 -16 52 -14 30 3 -16 12 -16 14 -1 20 9 3 14 12 11 19 -6 16 12 41 36 50 17 6 17 8 1 32 l-16 25 28 -15 c17 -8 32 -11 37 -6 5 5 16 7 23 4 8 -3 14 0 14 6 0 8 11 6 31 -4 17 -9 63 -23 102 -31 39 -8 76 -18 83 -22 15 -8 84 -110 84 -123 0 -5 10 -14 23 -20 13 -6 28 -24 34 -40 6 -16 23 -33 37 -38 14 -6 32 -21 41 -35 9 -13 24 -28 33 -32 22 -9 96 -24 147 -30 123 -14 183 -27 178 -40 -6 -15 73 -30 106 -19 28 9 27 32 -1 38 -17 3 -15 5 9 6 40 1 55 21 16 21 -38 0 -90 16 -121 36 l-25 17 29 12 c34 15 25 20 -51 33 -52 8 -59 20 -40 65 6 15 0 17 -53 17 -56 0 -61 2 -71 28 -6 15 -18 38 -26 52 -8 14 -16 33 -19 42 -3 10 -21 24 -41 32 -19 8 -35 19 -35 25 0 5 -15 19 -34 30 -24 15 -39 35 -50 68 -9 26 -16 48 -16 50 0 2 26 3 59 3 82 0 94 17 55 73 -24 34 -37 43 -72 49 -24 4 -59 17 -78 29 -20 12 -59 27 -87 33 l-52 11 -5 54 c-6 57 -27 84 -83 103 -21 8 -26 15 -22 29 4 11 2 19 -5 19 -6 0 -8 -4 -5 -10 3 -5 -9 -2 -27 8 -18 9 -37 23 -41 30 -4 6 -23 12 -41 12 -21 0 -48 11 -73 29 -24 17 -64 34 -95 40 -55 10 -97 25 -227 81 -50 22 -83 30 -101 26 -18 -3 -30 -1 -33 8 -6 14 -77 31 -114 28 -12 -2 -45 9 -72 23 -28 14 -74 34 -103 46 -29 11 -72 30 -95 41 -45 23 -69 20 -122 -12 -24 -15 -32 -26 -28 -40 5 -21 -34 -40 -85 -40 -21 0 -31 -6 -38 -24 -5",
        // d:"-13 -17 -30 -27 -37 -10 -8 -27 -27 -37 -44 -11 -16 -29 -37 -40 -47 -40 -34 -106 -16 -106 28 0 14 -4 22 -10 19 -6 -3 -10 4 -10 17 0 39 -12 68 -26 68 -9 0 -14 -11 -14 -27 l0 -28 -20 30 c-22 34 -25 66 -9 97 10 18 9 20 -4 15 -14 -5 -14 -2 -5 18 8 19 8 35 -2 67 -7 24 -14 49 -16 56 -2 7 -21 12 -49 12 -31 0 -63 9 -102 30 -70 37 -98 38 -154 1z m1721 -1111 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-180 -30 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m140 -20 c0 -5 -7 -6 -17 -3 -11 4 -14 3 -9 -5 5 -8 2 -10 -8 -6 -25 9 -19 24 9 24 14 0 25 -4 25 -10z",
    },
    {
        name: "25",
        description: "a very awesome country",
        d:"M1615 7660 c-3 -5 -3 -14 0 -20 3 -5 1 -10 -4 -10 -6 0 -11 7 -11 15 0 8 -6 15 -14 15 -16 0 -38 -24 -30 -33 3 -3 -4 -10 -15 -17 -35 -18 -26 -40 17 -40 49 0 57 -7 68 -55 8 -35 17 -44 63 -68 52 -28 90 -30 75 -5 -5 9 -3 9 9 -1 13 -10 17 -10 17 -1 0 6 -9 14 -20 17 -16 4 -18 9 -9 25 6 11 9 21 7 22 -2 1 -20 9 -40 18 -33 15 -38 23 -48 72 -7 36 -18 60 -30 66 -23 12 -27 12 -35 0z",
    },
    {
        name: "26",
        description: "a very awesome country",
        d:"M1643 7008 c-6 -7 -14 -24 -18 -38 -4 -14 -16 -33 -26 -43 -11 -10 -19 -27 -19 -37 0 -16 7 -20 33 -20 17 0 48 -6 69 -13 30 -11 35 -16 26 -30 -17 -31 8 -47 74 -47 40 0 77 -8 118 -25 65 -27 106 -31 144 -14 33 15 122 -2 214 -40 65 -28 229 -58 255 -48 8 3 38 -1 68 -7 30 -7 63 -10 74 -5 35 14 80 10 120 -11 22 -11 47 -20 57 -20 10 0 34 -6 53 -14 43 -18 50 -11 24 25 -21 30 -18 57 4 39 7 -6 28 -21 47 -33 21 -14 34 -30 32 -40 -2 -9 1 -17 5 -17 16 1 95 79 89 88 -13 21 -76 43 -94 33 -10 -5 -35 -9 -55 -8 -32 2 -35 5 -31 24 4 15 -1 26 -19 38 -21 13 -36 15 -94 7 -81 -12 -116 0 -121 38 -3 24 -1 25 55 26 39 0 71 7 97 21 40 20 40 20 16 33 -33 18 -164 8 -189 -14 -16 -15 -19 -15 -24 -1 -4 8 -17 15 -29 15 -13 0 -46 8 -75 19 -28 10 -62 16 -76 14 -19 -4 -29 1 -39 16 -19 31 -57 27 -71 -8 -16 -43 -32 -48 -148 -40 -118 7 -149 14 -149 33 0 29 -40 56 -84 56 -29 0 -52 7 -70 21 -33 26 -84 41 -92 27 -6 -10 -94 -5 -127 7 -7 3 -18 0 -24 -7z",
    },
    {
        name: "26",
        description: "a very awesome country",
        d:"M4360 7625 c-17 -45 -14 -48 43 -39 74 11 187 11 185 -1 -4 -22 13 -65 26 -65 11 0 13 7 6 30 -5 16 -11 34 -15 40 -3 6 4 10 17 10 13 0 30 5 38 10 10 7 -10 10 -65 10 -45 0 -85 4 -90 9 -6 5 -38 12 -72 16 -61 7 -63 6 -73 -20z",
    }



]
     

//
// <path d="M8471 7271 c-7 -5 -32 -6 -54 -3 -37 5 -40 3 -32 -14 5 -10 10 -36
// 13 -56 4 -37 3 -38 -27 -38 -25 0 -35 -7 -55 -39 -24 -37 -26 -38 -80 -38
// l-56 0 0 33 c0 19 -4 34 -9 34 -11 0 -21 -25 -21 -50 0 -27 -57 -35 -139 -21
// -73 13 -101 8 -101 -19 0 -22 15 -34 62 -49 21 -7 42 -19 46 -28 8 -13 13 -13
// 32 -3 20 11 25 10 36 -5 35 -48 230 -5 281 62 20 26 30 32 49 27 15 -4 34 0
// 49 10 21 14 23 20 14 42 -5 15 -8 27 -7 28 33 13 43 27 46 65 2 24 -1 41 -7
// 41 -6 0 -11 7 -11 15 0 17 -9 19 -29 6z"/>
// <path d="M4152 7228 c-7 -7 -12 -19 -12 -27 0 -11 -3 -12 -11 -4 -9 9 -19 9
// -39 -2 -24 -12 -28 -20 -29 -66 -1 -48 1 -51 22 -47 18 4 23 0 23 -16 -1 -14
// 6 -22 22 -24 16 -3 22 2 22 16 0 13 9 22 25 26 29 7 32 21 10 42 -8 9 -15 22
// -15 31 0 9 6 13 15 9 19 -7 20 32 1 57 -16 20 -18 21 -34 5z m-19 -88 c-5 -19
// -23 -39 -23 -25 0 9 20 45 24 45 2 0 2 -9 -1 -20z"/>
// <path d="M5430 7220 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
// -10 -4 -10 -10z"/>
// <path d="M5178 7213 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
// <path d="M7555 7210 c-11 -17 5 -32 21 -19 7 6 11 15 8 20 -7 12 -21 11 -29
// -1z"/>
// <path d="M8080 7200 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
// -4 -4 -4 -10z"/>
// <path d="M3095 7180 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0
// -13 -4 -16 -10z"/>
// <path d="M3997 7133 c-11 -10 -8 -51 4 -59 18 -10 32 13 25 40 -6 26 -16 32
// -29 19z"/>
// <path d="M7720 7100 c12 -23 35 -22 35 1 0 8 -10 15 -23 17 -21 3 -22 1 -12
// -18z"/>
// <path d="M1075 7101 c-7 -13 32 -34 47 -25 7 5 5 11 -7 21 -22 15 -32 16 -40
// 4z"/>
// <path d="M4240 7100 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
// -10 -4 -10 -10z"/>
// <path d="M5641 7078 c-4 -13 -11 -30 -14 -38 -4 -10 -6 -7 -6 8 -1 23 -8 27
// -28 14 -13 -8 -6 -62 8 -62 5 0 9 6 10 13 0 6 4 3 8 -8 7 -17 12 -13 35 32 30
// 61 31 63 11 63 -9 0 -19 -10 -24 -22z"/>
// <path d="M7875 7090 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
// -8 -4 -11 -10z"/>
// <path d="M5845 7063 c-16 -15 -25 -28 -19 -30 6 -2 9 -14 7 -27 -3 -15 4 -33
// 20 -51 l24 -29 18 27 c20 31 16 100 -7 123 -11 10 -18 8 -43 -13z"/>
// <path d="M4270 7071 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5
// 3 -10 2 -10 -4z"/>
// <path d="M7827 7073 c-8 -7 31 -53 45 -53 4 0 8 8 8 18 0 31 -35 54 -53 35z"/>
// <path d="M2620 7030 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
// -15 -4 -15 -10z"/>
// <path d="M3787 7033 c-10 -10 -8 -101 2 -107 12 -8 21 18 21 57 0 35 -12 61
// -23 50z"/>

// <path d="M4300 7011 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
// -10 -4 -10 -9z"/>
// <path d="M5806 6989 c-8 -27 -14 -102 -9 -115 8 -21 27 -17 53 11 l23 24 -32
// 47 c-19 29 -32 41 -35 33z"/>
// <path d="M5901 6941 c-8 -5 -9 -11 -3 -15 5 -3 15 1 22 9 14 16 3 20 -19 6z"/>
// <path d="M1515 6910 c-3 -5 1 -10 9 -10 8 0 18 5 21 10 3 6 -1 10 -9 10 -8 0
// -18 -4 -21 -10z"/>
// <path d="M5880 6895 c0 -8 4 -15 9 -15 5 0 11 7 15 15 3 9 0 15 -9 15 -8 0
// -15 -7 -15 -15z"/>
// <path d="M5425 6890 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
// -8 -4 -11 -10z"/>
// <path d="M6470 6890 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
// -4 -4 -4 -10z"/>
// <path d="M1535 6880 c3 -5 13 -10 21 -10 8 0 14 5 14 10 0 6 -9 10 -21 10 -11
// 0 -17 -4 -14 -10z"/>
// <path d="M3027 6874 c-14 -14 -6 -24 19 -24 16 0 24 5 22 13 -5 14 -31 21 -41
// 11z"/>
// <path d="M3810 6840 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
// -15 -4 -15 -10z"/>
// <path d="M2880 6830 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
// -10 -4 -10 -10z"/>
// <path d="M4985 6830 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
// -12 -4 -9 -10z"/>
// <path d="M5413 6818 c-43 -47 -64 -110 -43 -123 15 -9 72 55 80 90 13 56 -3
// 69 -37 33z"/>
// <path d="M5462 6828 c5 -15 28 -18 29 -3 0 6 -7 12 -17 13 -10 3 -15 -1 -12
// -10z"/>
// <path d="M3836 6811 c-6 -9 26 -21 54 -21 11 1 10 4 -4 15 -22 17 -42 19 -50
// 6z"/>
// <path d="M5330 6780 c-8 -5 -12 -11 -9 -14 7 -8 49 5 49 15 0 12 -21 11 -40
// -1z"/>
// <path d="M4805 6769 c-4 -6 -5 -13 -2 -16 7 -7 27 6 27 18 0 12 -17 12 -25 -2z"/>
// <path d="M4665 6760 c-11 -5 -32 -9 -47 -9 -23 -1 -48 -24 -48 -45 0 -7 87 3
// 128 16 34 10 43 32 16 42 -19 7 -24 7 -49 -4z"/>
// <path d="M5345 6750 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
// -8 -4 -11 -10z"/>
// <path d="M5140 6720 c0 -11 7 -23 16 -27 20 -8 36 17 22 34 -16 20 -38 15 -38
// -7z"/>
// <path d="M3398 6681 c-12 -11 -21 -21 -18 -23 3 -2 21 -14 40 -26 l35 -22 -28
// 0 c-16 0 -40 8 -53 19 -21 16 -22 20 -9 31 8 7 12 17 8 23 -4 6 -12 3 -22 -9
// -9 -11 -35 -25 -59 -32 -24 -7 -45 -18 -47 -25 -17 -57 -15 -67 12 -73 28 -7
// 119 8 186 31 21 7 40 9 43 4 7 -12 84 -11 84 1 0 6 7 10 15 10 8 0 15 5 15 10
// 0 6 -4 10 -10 10 -13 0 -13 47 0 55 6 4 8 11 4 16 -3 5 -10 7 -15 3 -5 -3 -6
// -10 -3 -16 5 -7 1 -9 -9 -5 -9 3 -19 2 -23 -4 -4 -7 -10 -6 -19 1 -7 6 -25 8
// -39 4 -16 -4 -26 -2 -26 5 0 5 -9 15 -19 21 -15 7 -25 5 -43 -9z"/>
// <path d="M4780 6689 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
// -5 -10 -11z"/>
// <path d="M4125 6680 c-3 -5 -1 -10 6 -10 6 0 -5 -11 -25 -25 -39 -27 -61 -31
// -71 -15 -8 13 -68 13 -81 0 -7 -7 -26 -3 -60 12 -96 43 -209 21 -202 -40 3
// -26 6 -27 63 -28 33 -1 79 -5 102 -9 23 -4 50 -4 60 0 10 4 31 7 46 6 16 -2
// 41 2 55 7 15 5 53 15 85 22 33 7 66 20 75 31 9 10 20 19 25 19 5 0 4 -6 -2
// -14 -9 -11 -8 -15 5 -20 20 -8 107 41 99 55 -4 5 -9 8 -13 6 -4 -2 -20 -9 -36
// -17 -23 -12 -30 -12 -33 -2 -7 20 -39 14 -57 -10 -17 -22 -17 -14 0 27 7 17
// -31 22 -41 5z"/>
// <path d="M4375 6680 c-3 -5 -12 -7 -19 -4 -7 3 -24 -4 -37 -15 -20 -18 -22
// -22 -9 -31 22 -15 30 -12 40 13 7 17 9 18 9 5 1 -14 10 -18 35 -18 40 0 96 18
// 96 31 0 23 -102 40 -115 19z"/>
// <path d="M4542 6677 c-9 -11 -10 -17 -2 -22 15 -9 23 -1 18 21 -3 15 -4 16
// -16 1z"/>
// <path d="M4856 6681 c-15 -6 -16 -10 -7 -16 8 -4 16 -2 21 5 5 7 10 8 14 2 7
// -12 56 -13 56 0 0 5 -4 6 -10 3 -5 -3 -10 -1 -10 4 0 12 -35 13 -64 2z"/>
// <path d="M5324 6668 c-19 -21 -19 -21 1 -14 11 5 28 11 37 13 10 3 15 9 12 14
// -9 15 -30 10 -50 -13z"/>
// <path d="M5025 6670 c3 -5 13 -10 21 -10 8 0 14 5 14 10 0 6 -9 10 -21 10 -11
// 0 -17 -4 -14 -10z"/>
// <path d="M3152 6658 c-7 -7 -12 -21 -12 -31 0 -10 -9 -21 -20 -24 -11 -3 -20
// -9 -20 -14 0 -14 50 -30 83 -27 25 2 32 10 44 43 7 22 11 45 9 52 -7 16 -68
// 17 -84 1z"/>
// <path d="M6467 6664 c-11 -12 3 -24 29 -24 27 0 32 15 8 24 -20 8 -29 8 -37 0z"/>
// <path d="M4745 6651 c-11 -5 -58 -11 -105 -15 -123 -10 -156 -19 -185 -54 -16
// -19 -51 -40 -95 -57 -54 -21 -74 -34 -91 -61 -11 -19 -19 -43 -16 -54 3 -11
// -1 -24 -9 -31 -11 -9 -14 -9 -14 0 0 7 -4 9 -10 6 -5 -3 -10 -12 -10 -19 0
// -18 75 -19 110 -1 16 8 37 15 47 15 10 0 43 25 73 56 60 61 101 85 171 102 49
// 12 152 63 182 90 13 12 15 17 5 24 -16 9 -27 9 -53 -1z"/>
// <path d="M8315 6640 c-8 -13 4 -50 16 -50 5 0 9 14 9 30 0 30 -13 40 -25 20z"/>
// <path d="M2725 6630 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
// -12 -4 -9 -10z"/>
// <path d="M3636 6633 c-11 -11 -6 -23 9 -23 8 0 15 4 15 9 0 13 -16 22 -24 14z"/>
// <path d="M3665 6607 c-4 -10 -5 -21 -1 -24 10 -10 18 4 13 24 -4 17 -4 17 -12
// 0z"/>
// <path d="M3050 6590 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
// -16 -4 -16 -10z"/>
// <path d="M8530 6560 c0 -14 52 -37 73 -32 18 4 18 5 1 23 -18 20 -74 27 -74 9z"/>
// <path d="M8182 6508 c2 -12 11 -24 21 -26 14 -3 18 1 15 20 -2 12 -11 24 -21
// 26 -14 3 -18 -1 -15 -20z"/>
// <path d="M3607 6503 c-69 -8 -57 -63 14 -63 31 0 48 -8 89 -45 58 -51 77 -55
// 117 -21 l28 24 -29 31 c-17 17 -35 31 -42 31 -6 0 -18 10 -26 21 -15 23 -73
// 31 -151 22z"/>
// <path d="M8230 6496 c0 -19 95 -116 114 -116 10 0 16 8 16 21 0 14 -5 19 -17
// 17 -25 -5 -55 22 -42 38 7 9 4 18 -12 33 -26 24 -59 28 -59 7z"/>
// <path d="M6990 6394 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0
// -10 -7 -10 -16z"/>
// <path d="M7017 6393 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3
// -9 2 -12 -2z"/>
// <path d="M1595 6340 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
// -12 -4 -9 -10z"/>
// <path d="M3980 6340 c-12 -7 -12 -12 -3 -21 9 -9 16 -9 27 1 26 21 5 39 -24
// 20z"/>
// <path d="M4173 6317 c-47 -23 -57 -47 -19 -47 28 0 76 35 76 56 0 18 -6 17
// -57 -9z"/>
// <path d="M7015 6330 c3 -5 1 -10 -4 -10 -6 0 -11 -4 -11 -10 0 -17 14 -11 28
// 10 10 17 10 20 -4 20 -8 0 -12 -4 -9 -10z"/>
// <path d="M8286 6331 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"/>
// <path d="M8550 6310 c20 -13 40 -13 40 0 0 6 -12 10 -27 10 -22 0 -25 -2 -13
// -10z"/>
// <path d="M7018 6289 c-18 -13 -28 -30 -28 -46 0 -35 -22 -104 -39 -125 -8 -9
// -20 -31 -27 -48 -12 -27 -11 -32 2 -37 10 -3 13 -12 8 -22 -24 -56 -36 -237
// -20 -301 6 -25 4 -47 -8 -80 -9 -25 -22 -78 -31 -118 -8 -39 -26 -89 -39 -110
// -14 -20 -28 -48 -31 -62 -5 -19 -21 -31 -70 -52 -43 -17 -62 -22 -59 -13 4 9
// -12 21 -46 36 -57 24 -94 73 -68 91 10 7 8 8 -7 7 -58 -6 -126 14 -163 48 -40
// 38 -147 93 -178 93 -11 0 -38 18 -59 41 -22 22 -56 50 -75 61 -67 41 -71 47
// -53 77 9 14 25 35 35 47 29 33 40 83 23 101 -13 12 -13 17 1 38 19 29 45 40
// 55 23 10 -16 41 9 37 31 -2 9 0 21 4 26 4 6 19 25 34 42 23 30 24 34 11 54
// -11 14 -17 17 -22 8 -6 -8 -12 -4 -21 12 -9 17 -9 28 -2 36 7 9 7 13 -1 13 -6
// 0 -15 -8 -18 -17 -4 -10 -16 -26 -28 -36 -14 -13 -16 -20 -7 -23 15 -7 6 -24
// -12 -24 -8 0 -13 8 -12 18 1 12 -6 17 -22 16 -17 0 -21 3 -16 15 3 9 9 24 11
// 34 3 9 9 17 14 17 5 0 9 6 9 12 0 7 -11 2 -25 -12 -37 -39 -53 -50 -68 -50 -7
// 0 -18 -5 -24 -11 -14 -14 -47 -4 -38 11 4 6 -15 10 -50 10 -51 0 -91 13 -106
// 34 -4 5 -21 6 -38 3 -23 -5 -33 -3 -37 8 -4 8 -10 12 -16 9 -5 -3 -23 6 -38
// 21 -25 24 -32 26 -45 15 -8 -7 -15 -9 -16 -4 -1 5 -2 20 -2 33 -1 13 -8 26
// -16 29 -10 3 -11 -2 -6 -19 7 -20 5 -22 -6 -12 -20 16 -86 14 -100 -3 -9 -11
// -8 -14 4 -14 8 0 17 -7 21 -15 3 -10 19 -15 45 -15 40 0 62 -14 39 -23 -9 -4
// -8 -6 2 -6 10 -1 15 -11 15 -30 0 -25 -3 -28 -18 -19 -23 12 -35 2 -19 -14 7
// -7 12 -16 12 -22 0 -5 -6 -2 -13 8 -12 16 -17 17 -37 6 -22 -12 -78 -10 -142
// 6 -19 4 -28 2 -28 -6 0 -18 -28 -42 -35 -30 -11 18 -27 11 -22 -10 3 -11 1
// -18 -3 -15 -5 3 -15 -2 -22 -10 -7 -9 -21 -24 -30 -33 -9 -9 -18 -33 -20 -52
// -2 -27 -8 -35 -23 -35 -14 0 -21 -9 -26 -32 -3 -18 -21 -49 -38 -69 -25 -28
// -30 -39 -20 -50 6 -8 21 -14 32 -14 11 0 17 -3 14 -7 -4 -3 -2 -12 5 -20 10
// -12 7 -13 -18 -7 -24 5 -27 4 -16 -7 18 -19 15 -34 -5 -18 -9 8 -26 15 -37 16
// -12 1 -45 5 -74 9 -48 6 -52 5 -46 -12 4 -11 4 -16 -1 -12 -12 11 -35 -11 -29
// -27 3 -7 1 -16 -5 -20 -14 -8 -14 11 0 50 11 31 10 33 -49 93 -34 34 -69 62
// -78 62 -10 0 -25 7 -35 16 -22 20 -49 12 -49 -15 0 -25 -20 -38 -31 -20 -8 12
// -12 11 -24 -5 -7 -10 -18 -15 -23 -12 -6 3 -15 -8 -21 -25 -6 -17 -15 -28 -21
// -24 -6 4 -18 1 -27 -7 -15 -12 -15 -11 -4 11 11 19 11 25 0 32 -10 6 -15 2
// -17 -15 -3 -25 -48 -43 -55 -22 -5 14 -18 3 -21 -18 -1 -8 -10 -24 -20 -35
// -10 -11 -15 -24 -12 -30 4 -5 1 -13 -6 -17 -8 -5 -4 -10 10 -15 12 -5 22 -13
// 22 -19 0 -6 -7 -6 -19 2 -15 9 -23 9 -35 -2 -14 -11 -16 -10 -10 4 5 12 0 16
// -22 16 -26 0 -26 -1 -9 -13 12 -10 14 -16 7 -21 -20 -12 -14 -57 7 -63 22 -6
// 17 -33 -6 -33 -9 0 -13 -6 -9 -15 6 -17 -20 -20 -44 -5 -9 5 -19 5 -27 -2 -10
// -8 -13 -6 -13 6 0 18 -8 20 -30 6 -12 -8 -12 -12 -2 -18 8 -6 11 -18 7 -35 -5
// -19 0 -36 16 -59 12 -18 16 -27 9 -20 -24 22 -40 14 -40 -20 0 -32 -1 -32 -30
// 22 -17 30 -35 57 -41 60 -5 4 -7 14 -3 23 9 25 -23 22 -36 -4 -15 -26 -47 -59
// -59 -59 -36 0 -55 -106 -26 -146 13 -19 12 -23 -8 -41 -12 -11 -30 -23 -39
// -26 -10 -3 -31 -33 -47 -65 -16 -32 -46 -73 -65 -90 -47 -41 -152 -74 -245
// -76 -63 -2 -75 -5 -90 -25 -13 -17 -31 -25 -67 -29 -28 -3 -65 -16 -87 -30
// -33 -22 -44 -24 -100 -18 -53 5 -69 2 -112 -18 -27 -13 -74 -44 -103 -69 -30
// -24 -71 -49 -91 -56 -45 -13 -87 -52 -106 -98 -22 -53 -39 -42 -32 22 5 52 5
// 54 -14 44 -29 -15 -71 -116 -59 -139 17 -31 12 -95 -9 -122 -11 -14 -25 -45
// -31 -70 -10 -40 -9 -50 9 -84 12 -21 21 -43 21 -49 0 -6 21 -39 46 -74 40 -55
// 45 -68 39 -97 -7 -41 -20 -44 -29 -8 -5 20 -10 24 -19 15 -18 -18 -28 -13 -16
// 7 9 15 8 24 -6 45 -24 37 -45 35 -45 -4 0 -21 10 -40 31 -61 16 -17 28 -37 25
// -44 -7 -18 -26 -18 -26 0 0 19 -40 67 -51 61 -4 -3 -14 15 -20 40 -11 44 -22
// 55 -34 35 -8 -13 59 -137 95 -175 48 -52 80 -112 80 -152 0 -27 10 -52 35 -87
// 19 -27 35 -55 35 -61 0 -6 11 -26 25 -45 20 -27 25 -46 25 -92 0 -62 29 -165
// 60 -208 42 -60 60 -108 57 -157 -2 -26 -7 -56 -11 -65 -5 -10 -3 -32 3 -49 9
// -27 8 -37 -7 -63 -16 -26 -24 -31 -55 -30 -40 1 -41 0 -37 -66 2 -41 17 -63
// 37 -56 18 7 62 -15 92 -48 14 -14 31 -26 38 -26 8 0 26 -6 41 -14 28 -14 267
// -32 245 -18 -8 5 7 16 40 31 29 13 62 32 73 43 15 13 29 17 46 13 21 -5 33 1
// 63 32 40 41 52 44 263 59 81 6 94 5 105 -10 10 -14 18 -15 40 -7 36 14 110 14
// 123 1 7 -7 23 -5 50 6 52 21 71 40 94 90 16 37 25 44 62 54 24 7 84 31 133 55
// 85 41 95 43 176 43 108 0 181 15 289 60 82 33 92 35 255 43 179 8 199 5 250
// -41 25 -23 41 -26 81 -16 23 5 40 2 65 -13 19 -11 57 -22 84 -25 28 -2 51 -5
// 53 -5 2 -1 0 -10 -3 -21 -5 -17 -2 -20 24 -20 17 0 31 -5 31 -11 0 -6 -7 -9
// -15 -5 -19 7 -19 4 -1 -39 14 -33 24 -40 54 -36 20 3 42 -19 42 -41 0 -10 15
// -33 34 -51 31 -29 64 -109 38 -93 -8 4 -22 -13 -22 -28 0 -1 58 -31 112 -57
// 11 -5 18 -3 22 7 10 26 7 34 -11 34 -12 0 1 19 40 58 52 52 93 81 139 96 9 3
// 27 24 38 47 12 23 31 44 42 47 15 3 19 11 15 28 -6 32 -1 30 17 -5 14 -26 14
// -30 0 -35 -12 -4 -14 -13 -10 -32 5 -20 0 -33 -24 -60 -16 -19 -30 -40 -31
// -47 -1 -7 -2 -34 -3 -62 -1 -49 -2 -50 -34 -53 -23 -2 -36 -11 -47 -31 -19
// -37 -12 -42 38 -26 23 8 53 13 67 12 21 -2 26 4 33 38 5 22 13 48 18 57 5 10
// 9 25 9 33 0 29 16 14 44 -40 32 -63 30 -93 -9 -127 -32 -27 -32 -38 0 -38 34
// 0 115 22 115 32 0 4 9 8 20 8 11 0 20 -4 20 -10 0 -5 -8 -6 -17 -3 -12 5 -15
// 2 -10 -10 3 -9 2 -17 -3 -17 -5 0 13 -21 41 -46 54 -52 71 -92 56 -140 -12
// -39 -7 -46 70 -117 42 -38 71 -57 89 -57 14 0 46 -12 71 -27 34 -20 47 -23 53
// -13 5 8 18 10 41 4 19 -4 42 -7 51 -5 9 1 52 -14 94 -33 42 -20 84 -36 93 -36
// 9 0 33 14 53 31 21 16 58 37 83 45 47 16 58 30 28 36 -13 2 -11 6 9 15 13 6
// 31 8 38 3 17 -11 5 -41 -20 -47 -26 -7 -26 -20 1 -28 13 -4 27 -1 39 10 17 15
// 19 14 38 -9 11 -15 29 -26 41 -26 12 0 24 -7 27 -15 4 -8 14 -15 25 -15 10 0
// 25 -10 33 -21 15 -23 46 -20 46 3 0 8 8 19 18 26 9 6 40 27 67 46 128 88 131
// 90 244 96 80 5 116 12 149 29 l43 22 -7 47 c-4 33 -1 59 10 86 9 21 16 52 16
// 68 0 47 60 148 88 148 9 0 13 7 9 20 -3 11 -1 23 4 26 5 3 9 17 9 32 0 16 12
// 42 30 62 16 19 29 42 30 50 1 36 64 137 90 145 31 10 90 70 90 93 0 11 16 48
// 36 82 28 48 37 77 44 138 4 42 18 104 29 136 12 33 21 67 21 77 0 10 9 33 20
// 51 22 37 20 80 -8 137 -13 26 -14 35 -4 38 6 3 12 19 12 36 0 29 -1 30 -16 15
// -15 -15 -18 -14 -36 4 -15 15 -18 26 -12 46 8 31 9 170 2 178 -8 8 11 86 28
// 112 11 17 12 27 4 43 -14 24 -36 20 -33 -7 2 -10 -4 -28 -12 -38 -13 -17 -18
// -18 -40 -8 -14 7 -31 25 -36 42 -6 16 -19 32 -29 35 -10 3 -35 28 -54 55 -20
// 28 -44 50 -53 50 -23 1 -51 22 -46 35 2 6 -3 20 -12 30 -11 16 -17 17 -23 7
// -16 -24 -36 17 -38 77 0 31 -7 67 -13 80 -12 21 -13 22 -26 5 -12 -17 -15 -16
// -43 13 -30 29 -52 28 -52 -2 0 -7 -7 -12 -15 -12 -16 0 -45 55 -45 86 0 36
// -42 115 -77 144 -29 25 -47 57 -24 42 5 -3 12 -1 16 5 3 5 -10 27 -30 47 -27
// 28 -38 34 -44 24 -7 -10 -9 -10 -14 2 -3 9 -25 19 -49 24 -36 7 -46 14 -60 46
// -12 24 -23 35 -33 31 -22 -9 -110 24 -135 51 -16 17 -21 31 -16 49 5 19 2 26
// -8 26 -7 0 -20 8 -27 18 -11 14 -11 15 1 5 8 -7 20 -13 28 -13 12 0 12 3 2 15
// -7 8 -18 15 -24 15 -8 0 -12 20 -12 58 -1 98 -13 141 -45 158 -34 17 -53 49
// -46 76 3 11 -1 41 -9 66 -7 26 -14 57 -14 70 0 12 -5 22 -10 22 -6 0 -19 20
// -30 44 -10 25 -27 47 -39 51 -12 3 -21 15 -21 26 0 30 -25 33 -59 8 -32 -23
// -58 -20 -67 8 -3 10 -10 29 -16 43 -6 14 -12 53 -14 88 -1 34 -7 69 -14 77 -6
// 8 -9 18 -6 23 3 4 -7 21 -21 36 -15 17 -23 35 -20 47 3 12 -2 24 -14 32 -10 8
// -21 29 -24 48 -10 56 -28 109 -37 109 -5 0 -6 5 -3 10 11 18 -29 10 -57 -11z
// m-410 -3699 c17 -16 27 -30 23 -30 -4 0 -20 14 -36 30 -16 17 -26 30 -23 30 4
// 0 20 -13 36 -30z m1035 -427 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2
// 13 -5z"/>
// <path d="M6181 6240 c-10 -18 -31 -40 -46 -50 -16 -10 -23 -20 -16 -24 6 -4
// 19 2 31 14 11 11 24 20 29 20 11 0 36 59 28 66 -3 4 -15 -8 -26 -26z"/>
// <path d="M5260 6225 c0 -8 -5 -14 -12 -12 -6 1 -14 -7 -16 -18 -2 -11 -11 -24
// -18 -28 -26 -15 -3 -28 42 -26 24 2 46 0 50 -4 26 -26 124 33 124 74 0 21 -28
// 38 -39 23 -9 -13 -98 -17 -106 -5 -9 16 -25 13 -25 -4z"/>
// <path d="M8620 6233 c0 -5 12 -21 25 -36 20 -22 32 -28 58 -25 l32 4 -40 19
// c-22 11 -44 26 -48 33 -9 13 -27 17 -27 5z"/>
// <path d="M8760 6210 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11
// 0 -20 -4 -20 -10z"/>
// <path d="M5708 6193 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
// <path d="M6115 6120 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
// -8 -4 -11 -10z"/>
// <path d="M6100 5911 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
// -10 -4 -10 -9z"/>
// <path d="M6112 5866 c1 -10 8 -17 13 -17 15 1 12 24 -3 29 -9 3 -13 -2 -10
// -12z"/>
// <path d="M6167 5855 c-9 -13 -18 -34 -20 -47 -2 -21 2 -23 42 -23 27 0 46 5
// 49 13 2 7 -2 10 -12 6 -18 -7 -23 21 -6 31 19 12 10 26 -12 19 -20 -6 -21 -5
// -9 10 11 13 11 16 0 16 -8 0 -22 -11 -32 -25z"/>
// <path d="M4615 5830 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8
// 0 -12 -4 -9 -10z"/>
// <path d="M6045 5690 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
// -7 -4 -4 -10z"/>
// <path d="M6165 5590 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z"/>
// <path d="M6226 5575 c18 -28 34 -33 34 -10 0 8 -9 19 -19 25 -30 15 -33 12
// -15 -15z"/>
// <path d="M6190 5570 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
// -10 -4 -10 -10z"/>
// <path d="M6572 5454 c-12 -8 -22 -19 -22 -25 0 -15 46 -10 60 6 7 8 19 15 27
// 15 8 0 11 5 8 10 -9 15 -48 12 -73 -6z"/>
// <path d="M4235 5450 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
// -7 -4 -4 -10z"/>
// <path d="M6590 5370 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11
// 0 -20 -4 -20 -10z"/>
// <path d="M7685 5070 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2
// 0 -7 -4 -10 -10z"/>
// <path d="M7997 4924 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z"/>
// <path d="M3035 4829 c-4 -6 -5 -13 -2 -16 7 -7 27 6 27 18 0 12 -17 12 -25 -2z"/>
// <path d="M8200 4691 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5
// 3 -10 2 -10 -4z"/>
// <path d="M8140 4629 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
// -5 -10 -11z"/>
// <path d="M8231 4604 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
// <path d="M8300 4470 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
// -4 -4 -4 -10z"/>
// <path d="M2705 4227 c-4 -10 -5 -21 -1 -24 10 -10 18 4 13 24 -4 17 -4 17 -12
// 0z"/>
// <path d="M2697 4175 c-4 -8 -2 -17 3 -20 6 -4 10 3 10 14 0 25 -6 27 -13 6z"/>
// <path d="M8656 3891 c-8 -13 4 -42 15 -35 12 7 12 44 0 44 -6 0 -12 -4 -15 -9z"/>
// <path d="M5860 2910 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
// -10 -4 -10 -10z"/>
// <path d="M4050 2850 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
// -10 -4 -10 -10z"/>
// <path d="M6285 2790 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
// -7 -4 -4 -10z"/>
// <path d="M11274 2745 c5 -15 4 -16 -9 -5 -30 25 -27 0 4 -36 19 -21 30 -42 26
// -51 -9 -25 23 -66 46 -60 17 4 18 3 8 -9 -9 -11 -2 -24 37 -67 53 -56 64 -65
// 64 -47 0 6 5 8 12 4 8 -5 9 -2 5 9 -4 11 -1 17 7 17 11 0 14 -16 7 -52 0 -4
// -8 -5 -17 -1 -12 4 -7 -9 14 -48 17 -29 38 -61 46 -70 8 -10 12 -20 9 -23 -3
// -3 1 -16 10 -29 12 -19 13 -27 4 -37 -9 -10 -9 -14 1 -17 17 -6 15 -23 -3 -23
// -9 0 -15 -9 -15 -22 -1 -52 -25 -82 -81 -103 -44 -17 -54 -25 -54 -44 0 -13 7
// -27 15 -31 42 -19 138 -64 160 -74 19 -9 26 -21 28 -47 2 -29 -5 -45 -38 -88
// -22 -28 -38 -56 -35 -61 3 -5 21 -12 40 -16 20 -3 35 -12 35 -20 0 -18 24 -18
// 60 1 64 33 262 285 224 285 -8 0 -14 8 -14 18 0 44 83 78 113 47 23 -22 37
// -11 37 30 0 27 6 37 26 48 20 11 27 23 30 52 2 20 11 49 20 63 16 24 16 26 -2
// 39 -32 23 -87 16 -124 -17 -39 -35 -73 -38 -136 -14 -32 12 -41 20 -37 33 5
// 13 3 14 -8 4 -7 -7 -18 -13 -24 -13 -15 0 -41 48 -49 92 -5 25 -17 44 -41 62
// -18 14 -36 26 -39 26 -7 0 4 -60 15 -82 13 -25 -8 -33 -21 -8 -6 11 -17 20
// -24 20 -20 0 -66 39 -66 56 0 8 7 14 15 14 12 0 6 13 -19 46 -29 38 -34 50
// -25 66 9 16 6 25 -12 44 -12 13 -30 23 -38 22 -9 -2 -16 4 -16 12 0 19 -94 55
// -108 41 -12 -12 -47 28 -47 52 0 9 -5 19 -12 23 -8 5 -9 2 -4 -11z"/>
// <path d="M6110 2715 c7 -9 15 -13 17 -11 7 7 -7 26 -19 26 -6 0 -6 -6 2 -15z"/>
// <path d="M6247 2626 c-69 -15 -90 -31 -64 -50 19 -15 147 -19 147 -5 0 5 15 9
// 34 9 19 0 37 4 40 9 9 14 -21 33 -42 27 -11 -4 -24 0 -32 9 -7 8 -15 15 -19
// 14 -3 0 -32 -6 -64 -13z"/>
// <path d="M11626 2502 c-3 -5 4 -18 15 -28 21 -19 21 -19 18 5 -4 25 -23 39
// -33 23z"/>
// <path d="M11690 2430 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5
// 0 -10 -4 -10 -10z"/>
// <path d="M11585 2400 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
// -12 -4 -9 -10z"/>
// <path d="M7445 2200 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
// -12 -4 -9 -10z"/>
// <path d="M7261 2036 c-16 -19 -10 -71 8 -71 21 0 35 29 27 58 -7 30 -18 34
// -35 13z"/>
// <path d="M7843 2023 c-20 -7 -15 -27 12 -53 16 -15 22 -27 16 -34 -6 -7 -4
// -18 3 -29 14 -19 36 -23 36 -7 0 6 7 10 15 10 20 0 19 16 -1 24 -8 3 -12 10
// -9 16 17 28 -39 85 -72 73z"/>
// <path d="M7405 1920 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
// -7 -4 -4 -10z"/>
// <path d="M7380 1904 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z"/>
// <path d="M7380 1870 c-15 -15 -19 -28 -14 -48 7 -31 64 -119 106 -164 16 -17
// 27 -32 25 -35 -2 -2 -10 3 -17 12 -32 39 -41 -2 -11 -50 40 -64 99 -117 138
// -125 21 -4 52 -11 70 -15 29 -7 34 -4 45 21 16 36 25 43 51 36 16 -4 19 -2 14
// 11 -4 10 -2 17 3 17 6 0 10 7 10 15 0 9 9 15 22 15 21 0 21 0 3 -14 -16 -12
// -17 -16 -6 -30 7 -9 22 -16 32 -16 14 0 19 7 19 30 0 17 -5 30 -12 30 -7 1 0
// 8 15 16 15 8 25 19 22 25 -4 5 -11 6 -17 3 -7 -5 -9 2 -4 22 9 35 29 59 24 29
// -2 -13 3 -20 12 -20 11 0 14 9 12 30 -1 17 -2 65 -2 107 1 72 0 78 -25 94 -20
// 13 -29 14 -38 5 -6 -6 -21 -11 -33 -11 -13 0 -25 -4 -28 -9 -6 -9 -100 -22
// -176 -24 -50 -1 -222 47 -199 56 10 4 9 6 -3 6 -10 1 -27 -8 -38 -19z m325
// -50 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z"/>
// <path d="M11195 1834 c-41 -22 -55 -42 -55 -78 0 -39 -6 -47 -57 -79 -29 -19
// -45 -37 -53 -64 -19 -58 -54 -98 -107 -123 -26 -12 -64 -35 -83 -50 -49 -38
// -180 -100 -211 -100 -14 0 -37 -10 -51 -22 -21 -19 -62 -53 -126 -103 -43 -33
// -53 -47 -43 -59 6 -7 8 -16 4 -19 -12 -13 -23 -7 -23 13 0 11 -5 20 -11 20 -6
// 0 -9 -6 -6 -14 3 -8 -1 -17 -9 -20 -18 -7 -18 -36 1 -36 9 0 12 -6 9 -15 -6
// -14 -8 -14 -18 1 -11 15 -14 15 -29 -1 -18 -17 -23 -55 -9 -55 5 0 19 -9 32
// -20 24 -21 69 -25 105 -10 14 5 26 2 38 -8 10 -9 35 -16 55 -17 26 0 37 -4 37
// -15 0 -11 11 -15 40 -15 22 0 46 -4 52 -8 30 -19 135 17 191 67 20 18 49 36
// 65 40 26 6 39 26 17 26 -13 0 11 48 45 88 14 16 25 39 25 49 0 52 21 82 75
// 107 29 13 64 27 77 31 12 4 26 12 29 17 4 7 14 6 27 -1 11 -6 32 -11 46 -11
// 34 0 34 27 1 42 -36 16 -29 48 17 73 20 10 44 33 54 49 9 16 43 56 75 88 58
// 58 59 59 42 84 -15 24 -15 26 12 54 l28 29 -27 7 c-15 3 -39 1 -52 -5 -35 -16
// -38 -14 -14 11 11 12 20 25 20 30 0 15 -19 8 -33 -13 -18 -25 -84 -62 -97 -54
// -6 4 -10 19 -10 35 0 22 -5 29 -22 32 -32 5 -33 26 -1 31 25 3 24 4 -7 5 -19
// 1 -48 -6 -65 -14z"/>
// <path d="M7740 1474 c0 -9 7 -14 17 -12 25 5 28 28 4 28 -12 0 -21 -6 -21 -16z"/>
// <path d="M11039 916 c10 -11 7 -19 -14 -39 -24 -22 -25 -25 -9 -31 9 -4 22 -2
// 28 4 5 5 22 10 37 10 15 0 32 7 39 15 19 23 -14 55 -58 55 -29 0 -32 -2 -23
// -14z"/>
// <path d="M12675 490 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
// -7 -4 -4 -10z"/>
// <path d="M10786 344 c-14 -20 -16 -28 -6 -34 17 -10 50 0 50 15 0 8 3 20 6 29
// 10 27 -29 18 -50 -10z"/>
// <path d="M11242 83 c-6 -3 -10 -9 -6 -14 7 -12 44 -12 44 0 0 11 -21 19 -38
// 14z"/>

export default countries;