/* pen textarea input description page mes information*/
function openTextArea(e) {
    e.target.parentNode.hidden = true;
    e.target.parentNode.nextElementSibling.removeAttribute('hidden');
}

/*****  drop down with image for page langue *******/

function custom_template(obj) {
    var data = $(obj.element).data();
    var text = $(obj.element).text();
    if (data && data['img_src']) {
        img_src = data['img_src'];
        template = $(
            "<div class=\"p-0 m-0 d-flex border-0 align-items-center justify-content-start \"><img src=\"" +
            img_src +
            "\" style=\"width:20px;height:15px;\"/><p style=\"font-size:1rem\" class=\"p-0 px-2 m-0 \">" +
            text + "</p></div>");
        return template;
    }
}

function formatState (obj) {
    var data = $(obj.element).data();
    var text = $(obj.element).text();
    if (data && data['img_src']) {
        img_src = data['img_src'];

    }
  var $state = $(
    '<span><img style="width:20px;height:15px;" class="img-flag" /> <span></span></span>'
  );

  $state.find("span").text(obj.text);
  $state.find("img").attr("src",img_src );

  return $state;
};

$('#language-select').select2({
    templateSelection: custom_template,
    templateResult: formatState,
    minimumResultsForSearch: Infinity,
});