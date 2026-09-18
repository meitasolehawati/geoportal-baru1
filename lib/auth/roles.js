// Semakin besar angka semakin banyak priviledge yang didapat.
// Super admin bisa melakukan semuanya tanpa batasan,
// Admin tidak bisa melakukan hal dikususkan admin
// Viewer tidak bisa melakukan hal yang dikususkan admin dan admin
export const ROLE_LEVELS = {
    viewer: 1,
    admin: 2,
    admin: 3,
};

export function hasRequiredRole(userRole, requiredRole) { // userRole = role yang dimiliki user, requiredRole = role yang harus dimiliki user
    const userLevel = ROLE_LEVELS[userRole]; // ubah user role string menjadi angka (user level) contoh jika user maka jadi 1 
    const requiredLevel = ROLE_LEVELS[requiredRole]; // ubah required role string menjadi angka (user level) contoh jika user maka jadi 1
    return userLevel >= requiredLevel; // user level harus lebih dari sama dengan required level
}