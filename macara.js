const cep = document.getElementById('cep');

cep.addEventListener('keyup', (e)=>{
    let v = e.target.value.replace(/\D/, "");
    v = v.replace(/(\d{5})(\d{3})/, "$1-$2");
    e.target.value = v;
});

const button = document.getElementById('button');

button.addEventListener('click',()=>{
    const nome = document.getElementById('nome');
    const data = document.getElementById('data');
    const curso = document.getElementById('curso');
    const turma = document.getElementById('turma');
    const endereço = document.getElementById('endereço');
    const nome_mae = document.getElementById('nome_mae');
    const bairro = document.getElementById('bairro');
    const nome_pai = document.getElementById('nome_pai');
    const cidade = document.getElementById('cidade');

    if(nome.value == '' | data.value == '' | curso.value == 'Selecione o Curso:' | turma.value == '' | endereço.value == '' | nome_mae.value == '' | nome_pai.value == '' | bairro.value == '' | cidade.value == ''){
        alert("Há campos vazios!")
    }else{
        alert("Tudo ok!")
    }
});