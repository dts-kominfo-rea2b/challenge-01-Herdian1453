// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name                    : "Herdian Permana",
    gender                  : "Male",
    age                     : "21",
    email                   : "permanaherdian@gmail.com",
    favoriteColor           :   {
                                    'Warna1' :  'White',
                                    'Warna2' :  'Black',
                                    'Warna3' :  'Red',
                                    'Warna4' :  'Blue'
                                },
    isHavePet               : "No",
    education               :   {
                                    'Sekolah1' : 'SDN 01 Pagi Jakarta',
                                    'Sekolah2' : 'SMPN 190 Jakarta',
                                    'Sekolah3' : 'SMAN 56 Jakarta'
                                },
    favoriteRestaurant      :   {
                                    'Restaurant1' :  'Solaria',
                                    'Restaurant2' :  'Bento',
                                    'Restaurant3' :  'Bebek H Slamet',
                                },
};

const secondUser = {
    name                    : "Meiliana Astiar",
    gender                  : "Female",
    age                     : "18",
    email                   : "meilianastiar@gmail.com",
    favoriteColor           :   {
                                    'Warna1' :  'White',
                                    'Warna2' :  'Black',
                                    'Warna3' :  'Red',
                                    'Warna4' :  'Blue'
                                },
    isHavePet               : "No",
    education               :   {
                                    'Sekolah1' : 'SDN 21 Pagi Jakarta',
                                    'Sekolah2' : 'SMPN 345 Jakarta',
                                    'Sekolah3' : 'SMAN 78 Jakarta'
                                },
    favoriteRestaurant      :   {
                                    'Restaurant1' :  'Solaria',
                                    'Restaurant2' :  'Bento',
                                    'Restaurant3' :  'Bebek H Slamet',
                                },
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};