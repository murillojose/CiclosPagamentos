const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://murillo:Lilo123qaz@cluster0-n4mnv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatorio."
mongoose.Error.messages.Number.min  = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max  = "O '{VALUE}' informado é menor que o limite mínimo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' informado é válido para o atributo '{PATH}'."