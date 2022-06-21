function multiTags(multiTagsInputId) {

    const multiTagsInput = document.getElementById(multiTagsInputId);
    const multiTagsContainer = multiTagsInput.parentElement

    let tags = [];

    function createTag(label) {
        const span = document.createElement('span');

        span.setAttribute('class', 'tag');

        span.setAttribute('data-item', label)
        span.innerHTML = `${label} <i class="cancel-tag">&times;</i>`;
        return span;
    }

    function createSep(label) {
        const span = document.createElement('i');
        span.setAttribute('class', 'tag-separators');

        span.innerText = label;
        return span;
    }

    function clearTags() {
        document.querySelectorAll('.tag').forEach(tag => {
            tag.parentElement.removeChild(tag);
        });
        document.querySelectorAll('.tag-separators').forEach(tag => {
            tag.parentElement.removeChild(tag);
        });
    }

    function addTags() {
        clearTags()

        tags.slice().forEach((tag, index) => {
           // const regex = new RegExp("^[a-zA-Z0-9_&/-]+$")

           if (tag!='') {
                multiTagsContainer.insertBefore(createTag(tag), multiTagsInput);
                multiTagsContainer.insertBefore(createSep(','), multiTagsInput);
            }
        });
    }

    multiTagsInput.addEventListener('keyup', (e) => {

        if (e.key === 'Enter') {
            e.target.value.split(',').forEach(tag => {
                tags.push(tag.trim());
            });

            addTags();
            multiTagsInput.value = '';
        }
    });

    multiTagsInput.addEventListener('focusout', (e) => {
        e.target.value.split(',').forEach(tag => {
            tags.push(tag.trim());
        });

        addTags();
        multiTagsInput.value = '';
    });

    window.addEventListener('load', (e) => {
        multiTagsInput.value.split(',').forEach(tag => {
            tags.push(tag.trim());
        });

        addTags();
        multiTagsInput.value = '';
    });

/* cancel a tag */
    multiTagsInput.parentElement.addEventListener('click', (e) => {

        if (e.target.classList == "cancel-tag") {
            const tagToRemove = e.target.parentElement.getAttribute('data-item');
            for (var i = 0; i < tags.length; i++) {

                if (tags[i] === tagToRemove) {
                    tags.splice(i, 1);
                    i--;
                }
            }


        }
        addTags();
    });

    
}

multiTags('specialtiesInput');

/* stop submitting the form via Enter touch page infopro */
document.querySelector('#form-register-infopro').addEventListener('keypress', (e) => {
    if (e.code == 'Enter') {
        e.preventDefault();
        return false;
    }

})  

