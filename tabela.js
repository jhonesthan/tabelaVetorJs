var usuarios = [
    {   'Id': 1, 
        'Nome': "Jordan",
        'Email': "jordan@gmail.com",
        'cpf': 1555
    },
    {   'Id': 2,
        'Nome': "Jhone",
        'Email': "jordan@gmail.com",
        'cpf': 1999
    },

    {   'Id': 3,
        'Nome': "Maria",
        'Email': "jordan@gmail.com",
        'cpf': 4777
    }
];

document.write("<table border='1'>");
document.write("<tr> <td> Id    </td>");
document.write("     <td> Nome  </td>");
document.write("     <td> Email </td>");
document.write("     <td> Cpf   </td>");




for ( vetor = 0; vetor < usuarios.length; vetor ++ ) {
    document.write('<tr>')
    document.write(' <td>' + usuarios[1].Id    + '</td> ')
    document.write(' <td>' + usuarios[1].Nome  + '</td> ')
    document.write(' <td>' + usuarios[1].Email + '</td> ')
    document.write(' <td>' + usuarios[1].cpf   + '</td> ')
    document.write('</tr>')    
}


