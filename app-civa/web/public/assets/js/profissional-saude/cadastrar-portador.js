$('.select2').select2();

let campos = ["nome", "sobrenome",
    "genero", "data-nascimento",
    "nacionalidade", "tipo-doc1", "doc1",
    "nome-pais", "cod-postal", "nome-logrd",
    "nome-num", "nome-comple", "bairro",
    "municipio", "estado", "tele", "email", "senha", "confirmar-senha"];

let campos_confirmar_senha = ["senha-confirmacao"];

let form = $("#form-meus-dados");
let modal_confirmar_senha = $("#modal-confirmar-senha");

$("#salvar").click(() => {
    
    if (tratar_campos(campos)) {
        
        modal_confirmar_senha.modal("show");

        $("#confirmar").click(() => {
            if (tratar_campos(campos_confirmar_senha)) {
                modal_confirmar_senha.modal("hide");
                
                $.get("", form.serialize(), (data, status) => {
                    if (status === 'success') {
                        title = 'Cadastro realizada com sucesso!';
                        text = "Cadastro realizado.";   
                        swalAlertSuccess(title, text, callback);

                    } else {
                        title = 'Erro!';
                        text = 'Algum erro ocorreu e seus dados n&atilde;o foram enviados.';
                        swalAlertError(title, text, callback);
                    }
                });
            } else {
                title = 'Campos n&atilde;o preenchidos!';
                text = 'Todos os campos precisam ser preenchidos!';
                swalAlertError(title, text, callback);
            }
        });

    } else {
        title = 'Campos n&atilde;o preenchidos!';
        text = 'Todos os campos precisam ser preenchidos!';
        swalAlertError(title, text, callback);
    }
});


pegarPaises("nacionalidade");



