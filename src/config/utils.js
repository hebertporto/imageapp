
export function getNameOfDay(day) {
  switch (day) {
    case '1':
      return 'Domingo';
    case '2':
      return 'Segunda';
    case '3':
      return 'Terça';
    case '4':
      return 'Quarta';
    case '5':
      return 'Quinta';
    case '6':
      return 'Sexta';
    case '7':
      return 'Sábado';
    default:
      return 'Dia não encontrado';
  }
}

export function horarioFormatado(horario) {
  if (typeof horario !== 'undefined') {
    const hours = horario.split('-');
    const inicio = hours[0].match(/.{1,2}/g);
    const fim = hours[1].match(/.{1,2}/g);
    const horarioFormatado = `${inicio[0]}h${inicio[1]} às ${fim[0]}h${fim[1]}`;

    return horarioFormatado;
  }
}
