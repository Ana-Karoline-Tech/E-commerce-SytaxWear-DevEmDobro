// Utilitários para a aplicação

/**
 * Formata um número como moeda
 * @param {number} value - Valor a formatar
 * @returns {string} Valor formatado em Real
 */
export function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

/**
 * Armazena dados no localStorage
 * @param {string} key - Chave
 * @param {*} value - Valor
 */
export function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
    }
}

/**
 * Recupera dados do localStorage
 * @param {string} key - Chave
 * @returns {*} Valor ou null
 */
export function getLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Erro ao recuperar do localStorage:', error);
        return null;
    }
}

/**
 * Remove item do localStorage
 * @param {string} key - Chave
 */
export function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

/**
 * Desfaz acentos de uma string
 * @param {string} str - String
 * @returns {string} String sem acentos
 */
export function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Valida um email
 * @param {string} email - Email a validar
 * @returns {boolean} Email é válido
 */
export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Cria um delay assíncrono
 * @param {number} ms - Milissegundos
 * @returns {Promise}
 */
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
