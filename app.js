
const state = {
    problems: null
};

function showModal(result) {
    resultContainer.text('\\[' + result + '\\]'); 

    MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultContainer[0]]);

    resultModal.modal('open');
}

function loadProblems() {
    fetch('./problems/problems-' + (new Date().getFullYear()) + '.yaml').then(it => it.text()).then(it => {
        const yamlResult = jsyaml.load(it);
        state.problems = _.chain(yamlResult.problems)
                            .sortBy('show-up')
                            .filter(it => it['show-up'] < new Date() )
                            .reverse()
                            .tap(list => { // Inject id property based on time
                                _.each(list, it => {
                                    it.id = it['show-up'].getTime().toString()
                                });
                            })
                            .value();

        displayProblems(state.problems);
    });
}

function renderProblem(problem) {
    const div = $('<div>');
    const html = Handlebars.templates.problem(problem);

    div.html(html);
    div.find('a.--show-modal').on('click', function() {
        showModal(problem.resultLatex);
    });
    
    const clipboard = new Clipboard(div.find('a.--share')[0])
    
    clipboard.on('success', function() {
        Materialize.toast('Link del problema copiato negli appunti!', 4000);
    });
    clipboard.on('error', function () {
        Materialize.toast('Impossibile copiare link!', 4000, 'red darken-4 white-text');
    });

    return div.first();
}

const injectDayProblemDiv = $('#inject--day-problem');
const injectOldProblemsDiv = $('#inject--old-problems');

function displayProblems(problems) {
    injectDayProblemDiv.empty();
    injectDayProblemDiv.append(
        renderProblem(problems[0])
    );

    injectOldProblemsDiv.empty();
    problems.slice(1).forEach(problem => {
        injectOldProblemsDiv.append(
            renderProblem(problem)
        );
    });
} 

// Initial setup

const resultModal = $('#result-modal');
const resultContainer = $('#result-container');

$(function(){
    $('.modal').modal();

    loadProblems();
})
