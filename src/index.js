module.exports = function toReadable (number) {
    let result ='';
    number=String(number);
    let hundreds = number.slice(-3,-2);
    let dozens = number.slice(-2,-1);
    let units = number.slice(-1);
    if(hundreds==='1'){result=`${'one hundred'}`;
    }else if(hundreds==='2'){result=`${'two hundred'}`;
    }else if(hundreds==='3'){result=`${'three hundred'}`;
    }else if(hundreds==='4'){result=`${'four hundred'}`;
    }else if(hundreds==='5'){result=`${'five hundred'}`;
    }else if(hundreds==='6'){result=`${'six hundred'}`;
    }else if(hundreds==='7'){result=`${'seven hundred'}`;
    }else if(hundreds==='8'){result=`${'eight hundred'}`;
    }else if(hundreds==='9'){result=`${'nine hundred'}`;
    }else{};
  
    if(hundreds==='' && dozens==='1' && units==='1'){ return `${'eleven'}`;
  }else if(hundreds==='' && dozens==='1' && units==='2'){ return `${'twelve'}`;
  }else if(hundreds==='' && dozens==='1' && units==='3'){ return `${'thirteen'}`;
  }else if(hundreds==='' && dozens==='1' && units==='4'){ return `${'fourteen'}`;
  }else if(hundreds==='' && dozens==='1' && units==='5'){ return `${'fifteen'}`;
  }else if(hundreds==='' && dozens==='1' && units==='6'){ return `${'sixteen'}`;
  }else if(hundreds==='' && dozens==='1' && units==='7'){ return `${'seventeen'}`;
  }else if(hundreds==='' && dozens==='1' && units==='8'){ return `${'eighteen'}`;
  }else if(hundreds==='' && dozens==='1' && units==='9'){ return `${'nineteen'}`;
  }else if(hundreds==='' && dozens==='1' && units==='0'){ return `${'ten'}`;
  }else if(hundreds==='' && dozens==='2'){result=`${'twenty'}`;
  }else if(hundreds==='' && dozens==='3'){result=`${'thirty'}`;
  }else if(hundreds==='' && dozens==='4'){result=`${'forty'}`;
  }else if(hundreds==='' && dozens==='5'){result=`${'fifty'}`;
  }else if(hundreds==='' && dozens==='6'){result=`${'sixty'}`;
  }else if(hundreds==='' && dozens==='7'){result=`${'seventy'}`;
  }else if(hundreds==='' && dozens==='8'){result=`${'eighty'}`;
  }else if(hundreds==='' && dozens==='9'){result=`${'ninety'}`;
  }else{};
  
  if(hundreds==='' && dozens==='' && units==='1'){result=`${'one'}`;
  }else if(hundreds==='' && dozens==='' && units==='2'){result=`${'two'}`;
  }else if(hundreds==='' && dozens==='' && units==='3'){result=`${'three'}`;
  }else if(hundreds==='' && dozens==='' && units==='4'){result=`${'four'}`;
  }else if(hundreds==='' && dozens==='' && units==='5'){result=`${'five'}`;
  }else if(hundreds==='' && dozens==='' && units==='6'){result=`${'six'}`;
  }else if(hundreds==='' && dozens==='' && units==='7'){result=`${'seven'}`;
  }else if(hundreds==='' && dozens==='' && units==='8'){result=`${'eight'}`;
  }else if(hundreds==='' && dozens==='' && units==='9'){result=`${'nine'}`;
  }else if(hundreds==='' && dozens==='' && units==='0'){result=`${'zero'}`;
  }else{};
  
    if(dozens==='1' && units==='1'){ return `${result} ${'eleven'}`;
    }else if(dozens==='1' && units==='2'){ return `${result} ${'twelve'}`;
    }else if(dozens==='1' && units==='3'){ return `${result} ${'thirteen'}`;
    }else if(dozens==='1' && units==='4'){ return `${result} ${'fourteen'}`;
    }else if(dozens==='1' && units==='5'){ return `${result} ${'fifteen'}`;
    }else if(dozens==='1' && units==='6'){ return `${result} ${'sixteen'}`;
    }else if(dozens==='1' && units==='7'){ return `${result} ${'seventeen'}`;
    }else if(dozens==='1' && units==='8'){ return `${result} ${'eighteen'}`;
    }else if(dozens==='1' && units==='9'){ return `${result} ${'nineteen'}`;
    }else if(dozens==='1' && units==='0'){ return `${result} ${'ten'}`;
    }else if(hundreds!=='' && dozens==='2'){result=`${result} ${'twenty'}`;
    }else if(hundreds!=='' && dozens==='3'){result=`${result} ${'thirty'}`;
    }else if(hundreds!=='' && dozens==='4'){result=`${result} ${'forty'}`;
    }else if(hundreds!=='' && dozens==='5'){result=`${result} ${'fifty'}`;
    }else if(hundreds!=='' && dozens==='6'){result=`${result} ${'sixty'}`;
    }else if(hundreds!=='' && dozens==='7'){result=`${result} ${'seventy'}`;
    }else if(hundreds!=='' && dozens==='8'){result=`${result} ${'eighty'}`;
    }else if(hundreds!=='' && dozens==='9'){result=`${result} ${'ninety'}`;
    }else{result=`${result}`;}
  
    if(dozens!=='' && units==='1'){result=`${result} ${'one'}`;
    }else if(dozens!=='' && units==='2'){result=`${result} ${'two'}`;
    }else if(dozens!=='' && units==='3'){result=`${result} ${'three'}`;
    }else if(dozens!=='' && units==='4'){result=`${result} ${'four'}`;
    }else if(dozens!=='' && units==='5'){result=`${result} ${'five'}`;
    }else if(dozens!=='' && units==='6'){result=`${result} ${'six'}`;
    }else if(dozens!=='' && units==='7'){result=`${result} ${'seven'}`;
    }else if(dozens!=='' && units==='8'){result=`${result} ${'eight'}`;
    }else if(dozens!=='' && units==='9'){result=`${result} ${'nine'}`;
    }else{}
    return result;
}
