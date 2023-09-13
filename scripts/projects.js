$(document).ready(() => {

    var projects = $("._projects");

    $.getJSON("files/projects.json", (json_data) => {
        $.each(json_data, (project_count, project_data) => {
            var card = `<div class="_project_card">
                                <img src=${(project_data.img) ? project_data.img : "files/project/bubbles.png" } alt="Project ${project_count + 1}" >
                                <h3>${project_data.title}</h3>
                                <p>${project_data.desc}</p>
                                <a href=${project_data.link} target="_blank">View on GitHub</a>
                        </div>`;
            projects.append(card);
        });
    });
});