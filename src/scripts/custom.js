(function($) {

    var isSidebar = Cookies.get('isSidebar');

    if(isSidebar=='no'){
        $( "#wrapper" ).addClass( "toggled" )
    }

    $(".navbar-toggle-secondary").click(function(e){
        e.preventDefault();
        $("#wrapper").removeClass("toggled");
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#navbar").removeClass("in");

        $("#wrapper").toggleClass("toggled");

        if($( "#wrapper" ).hasClass( "toggled" )==false){
            Cookies.set('isSidebar', 'yes');
        }
        else{
            Cookies.set('isSidebar', 'no');
        }
    });

    $(document).on('click', '.panel-heading span.clickable', function(e){
        var $this = $(this);
        if(!$this.hasClass('panel-collapsed')) {
            $this.parents('.panel').find('.panel-body').slideUp();
            $this.addClass('panel-collapsed');
            $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        } else {
            $this.parents('.panel').find('.panel-body').slideDown();
            $this.removeClass('panel-collapsed');
            $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        }
    });

    // bootstrap select
    $('.selectpicker').selectpicker();

    // select2
    $(".select2").select2({
        theme: "bootstrap"
    });

    // form validator, @link:
    $('#formHorizontal')
        .find('[name="bs_select"]')
        .selectpicker()
        .change(function(e) {
            $('#formHorizontal').formValidation('revalidateField', 'bs_select');
        })
        .end()
        .find('[name="colors"]')
        .selectpicker()
        .change(function(e) {
            $('#formHorizontal').formValidation('revalidateField', 'colors');
        })
        .end()
        .find('[name="colors2"]')
        .select2()
        // Revalidate the color when it is changed
        .change(function(e) {
            $('#formHorizontal').formValidation('revalidateField', 'colors2');
        })
        .end()
        .formValidation({

        framework: 'bootstrap',
        excluded: ':disabled',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        addOns: {
            mandatoryIcon: {
                icon: 'glyphicon glyphicon-asterisk'
            }
        },
        fields: {
            first_name: {
                validators: {
                    notEmpty: {
                        message: 'First Name is required and cannot be empty'
                    }
                }
            },
            last_name: {
                validators: {
                    notEmpty: {
                    },
                    message: 'Last Name is required and cannot be empty'
                }
            },
            textarea: {
                validators: {
                    notEmpty: {
                        message: 'Text Area is required and cannot be empty'
                    }
                }
            },
            checkbox: {
                validators: {
                    notEmpty: {
                        message: 'Inline checkbox is required and cannot be empty'
                    }
                }
            },
            inline_checkbox: {
                validators: {
                    notEmpty: {
                        message: 'Checkbox is required and cannot be empty'
                    }
                }
            },
            radio: {
                validators: {
                    notEmpty: {
                        message: 'radio button is required and cannot be empty'
                    }
                }
            },
            radioInline: {
                validators: {
                    notEmpty: {
                        message: 'Inline radio button is required and cannot be empty'
                    }
                }
            },
            colors: {
                validators: {
                    callback: {
                        message: 'Please choose 2-4 colors you like most',
                        callback: function(value, validator, $field) {
                            // Get the selected options
                            var options = validator.getFieldElements('colors').val();
                            return (options != null && options.length >= 2 && options.length <= 4);
                        }
                    }
                }
            },
            bs_select: {
                validators: {
                    notEmpty: {
                        message: 'Please select your option.'
                    }
                }
            },

            colors2: {
                validators: {
                    callback: {
                        message: 'Please choose 2-4 color you like most',
                        callback: function(value, validator, $field) {
                            // Get the selected options
                            var options = validator.getFieldElements('colors2').val();
                            return (options != null && options.length >= 2 && options.length <= 4);
                        }
                    }
                }
            },
            date: {
                validators: {
                    notEmpty: {
                        message: 'The date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The date is not a valid'
                    }
                }
            }

        }

    });

    $('#datePicker')
        .datepicker({
            format: 'mm/dd/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#formHorizontal').formValidation('revalidateField', 'date');
        });

    $('.input-daterange input').each(function() {
        $(this).datepicker("clearDates");
    });

    $('[data-toggle="popover"]').popover();

    $('#datatable').DataTable({
        pagingType: "full_numbers"
    });

    //$('#panel-overflow').perfectScrollbar();
    $('#sidebar-wrapper').perfectScrollbar();

    tinymce.init({
        selector: '#mytextarea',
        height: 500,
        theme: 'modern',
        plugins: [
            'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            'searchreplace wordcount visualblocks visualchars code fullscreen',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'emoticons template paste textcolor colorpicker textpattern imagetools'
        ],
        toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons',
        toolbar2: '',
        image_advtab: true,
        templates: [
            { title: 'Test template 1', content: 'Test 1' },
            { title: 'Test template 2', content: 'Test 2' }
        ],
        content_css: [
            '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
            '//www.tinymce.com/css/codepen.min.css'
        ]
    });

    $(function(){
        $(".wrapper1").scroll(function(){
            $(".wrapper2")
                .scrollLeft($(".wrapper1").scrollLeft());
        });
        $(".wrapper2").scroll(function(){
            $(".wrapper1")
                .scrollLeft($(".wrapper2").scrollLeft());
        });
    });


})(jQuery); // Fully reference jQuery after this point.

