const date = new Date();
const hour = date.getHours().toString();
const min  = date.getMinutes().toString();
const day  = date.getDay().toString();

const horaInit = hour+min;
// console.log('min_lenght', min.length);
// console.log('data', horaInit);
// console.log('dia da semana', day);

const curso = {
    '1': [
      {
        'horario': '1600-1930',
        'curso': 'Sistemas'
      },
      {
        'horario': '2000-2230',
        'curso': 'Banco de Dados'
      }
    ],
    '2': [
      {
        'horario': '2000-2230',
        'curso': 'Sistemas2'
      },
    ]
  };


const diaDoCurso = 1;
const novoCurso = {
    'horario': '2300-2330',
    'curso': 'Web 1'
};
const inicio = '2231';
const fim = '2300';

function adicionarCurso (horaInicio, horaFim, dia, novoCurso, curso) {
  var disponibilidade = true;
  curso[dia].forEach((item) => {
    const hours = item.horario.split('-');
    if (parseInt(horaInicio) >= parseInt(hours[0]) && parseInt(horaInicio) <= parseInt(hours[1])) {
      disponibilidade = false;
    }
    if (parseInt(horaFim) >= parseInt(hours[0]) && parseInt(horaFim) <= parseInt(hours[1])) {
      disponibilidade = false;
    }
  });

  if(disponibilidade) {
    curso[dia].push(novoCurso);
    console.log(curso[dia]);
    console.log(' * horario adicionado *');
  } else {
    console.log(' * horario ocupado *');
  }

}

adicionarCurso(inicio, fim, diaDoCurso, novoCurso, curso);

// const dayWeek = 1;
// const timePicutre = 2301;
//
// const res = curso[dayWeek].filter((value) => {
//   // console.log(value.horario);
//   const hours = value.horario.split('-');
//   if (parseInt(timePicutre) > parseInt(hours[0]) && parseInt(timePicutre) < parseInt(hours[1])) {
//     return value;
//   }
// });
// console.log(res[0].curso);

