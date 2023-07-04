
// typing animation

var _CONTENT = [ "Find Over 5000+ Colleges in India & Abroad", "Find Over 200+ Exams in India", "Find Over 1000+ Courses in IndiaÂ &Â Abroad" ];
var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#text");
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;
	if(text === '') {
		clearInterval(_INTERVAL_VAL);
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

_INTERVAL_VAL = setInterval(Type, 100);


// -----------------------------
// Latest Information
$(document).ready(function () {
	var owl = $("#owl-information");
	owl.owlCarousel({
		autoPlay: 4000,
		items: 4,
		itemsDesktop: [1000, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 1],
		itemsMobile: false,
		pagination: false
	});
	$(".next_information").click(function () {
		owl.trigger('owl.next');
	})
	$(".prev_information").click(function () {
		owl.trigger('owl.prev');
	})
});


// Latest Information
$(document).ready(function () {
	var owl = $("#owl-abroad-mbbs");
	owl.owlCarousel({
		autoPlay: 4000,
		items: 4,
		itemsDesktop: [1000, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 1],
		itemsMobile: false,
		pagination: false
	});
	$(".next_abroad_mbbs").click(function () {
		owl.trigger('owl.next');
	})
	$(".prev_abroad_mbbs").click(function () {
		owl.trigger('owl.prev');
	})
});


// Top Exam
$(document).ready(function () {
	var owl = $("#owl-exam");
	owl.owlCarousel({
		autoPlay: 5000,
		items: 4,
		itemsDesktop: [1000, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 1],
		itemsMobile: false,
		pagination: false
	});
	$(".next_exam").click(function () {
		owl.trigger('owl.next');
	})
	$(".prev_exam").click(function () {
		owl.trigger('owl.prev');
	})
});


// Courses
$(document).ready(function () {
	var owl = $("#owl-courses");
	owl.owlCarousel({
		autoPlay: 4000,
		items: 4,
		itemsDesktop: [1000, 4],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 1],
		itemsMobile: false,
		pagination: false
	});
	$(".next_courses").click(function () {
		owl.trigger('owl.next');
	})
	$(".prev_courses").click(function () {
		owl.trigger('owl.prev');
	})
});

// Place
$(document).ready(function () {
	var owl = $("#owl-place");
	owl.owlCarousel({
		autoPlay: 4000,
		items: 8,
		itemsDesktop: [1000, 4],
		itemsDesktopSmall: [900, 4],
		itemsTablet: [600, 2],
		itemsMobile: false,
		pagination: false
	});
	$(".next_place").click(function () {
		owl.trigger('owl.next');
	})
	$(".prev_place").click(function () {
		owl.trigger('owl.prev');
	})
});


// University
$(document).ready(function () {
	var owl = $("#owl-university");
	owl.owlCarousel({
		autoPlay: 4000,
		items: 4,
		itemsDesktop: [1000, 3],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 1],
		itemsMobile: false,
		pagination: false
	});
	$(".next_university").click(function () {
		owl.trigger('owl.next');
	})
	$(".prev_university").click(function () {
		owl.trigger('owl.prev');
	})
});



// Media
$(document).ready(function () {
	var owl = $("#owl-media");
	owl.owlCarousel({
		autoPlay: 5000,
		items: 4,
		itemsDesktop: [1000, 3],
		itemsDesktopSmall: [900, 3],
		itemsTablet: [600, 1],
		itemsMobile: false,
		pagination: false
	});
	$(".next_media").click(function () {
		owl.trigger('owl.next');
	})
	$(".prev_media").click(function () {
		owl.trigger('owl.prev');
	})
});
// -----------------------------

// Less And More
function viewMore() {
	var dots = document.getElementById("show");
	var moreText = document.getElementById("hide");
	var btnText = document.getElementById("viewmore");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "View More"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "View Less"; 
	  moreText.style.display = "inline";
	}
}


// Sidebar Script
(function ($, pluginName) {
  var defaults = {
    htmlClass: true
  }

  function Plugin (element, options) {
    this.element = element
    this.eventController = eventController
    this.options = $.extend({}, defaults, options)
    this.options.initialized = false

    this.init()
  }

  Plugin.prototype.init = function () {
    var sidebar = this.element
    var options = this.options
    var eventController = this.eventController.bind(this)

    if (options.initialized === true) return

    eventController('loading')

    sidebar.find('[data-submenu]').on('click', function (event) {
      event.preventDefault()

      var self = $(this)
      var subMenuId = self.attr('data-submenu')
      var subMenuEl = $('#' + subMenuId)

      if (!subMenuEl.length) return

      var eventDetails = {
        subMenu: true,
        menuId: subMenuId
      }

      eventController('opening', eventDetails)

      sidebar.find('.submenu.current').removeClass('current')
      subMenuEl.addClass('opened current')
      !sidebar.hasClass('submenu-opened') && sidebar.addClass('submenu-opened')

      sidebar[0].scrollTo({ top: 0 })

      eventController('opened', eventDetails)
    })

    sidebar.find('[data-submenu-close]').on('click', function (event) {
      event.preventDefault()

      var self = $(this)
      var subMenuId = self.attr('data-submenu-close')
      var subMenuEl = $('#' + subMenuId)

      if (!subMenuEl.length) return

      var eventDetails = {
        subMenu: true,
        menuId: subMenuId
      }

      eventController('closing', eventDetails)

      subMenuEl.removeClass('opened current')
      sidebar.find('.submenu.opened').last().addClass('current')
      !sidebar.find('.submenu.opened').length && sidebar.removeClass('submenu-opened')

      subMenuEl[0].scrollTo({ top: 0 })

      eventController('closed', eventDetails)
    })

    eventController('load')

    this.options.htmlClass && !$('html').hasClass('sidebar-initialized') && $('html').addClass('sidebar-initialized')

    options.initialized = true
  }

  Plugin.prototype.open = function () {
    this.eventController(
      'opening',
      { subMenu: false }
    )

    this.element.addClass('opened')
    this.options.htmlClass && $('html').addClass('sidebar-opened')

    this.eventController(
      'opened',
      { subMenu: false }
    )
  }

  Plugin.prototype.close = function (disableEvent) {
    !disableEvent && this.eventController('closing', { subMenu: false })

    this.element.removeClass('opened')
    this.options.htmlClass && $('html').removeClass('sidebar-opened')

    !disableEvent && this.eventController('closed', { subMenu: false })
  }

  Plugin.prototype.destroy = function () {
    this.eventController('destroying')

    this.close(true)

    this.element.find('.submenu.opened').removeClass('opened')

    this.element.removeData(pluginName)

    this.eventController('destroyed')

    this.options = defaults

    this.options.htmlClass && $('html').removeClass('sidebar-initialized')

    delete this.element
    delete this.options
    delete this.eventController
  }

  Plugin.prototype.on = function (name, handler) {
    eventBinder.call(this, name, handler)
  }

  var eventController = function (type, details) {
    if (!this.options[type]) return
    if (typeof this.options[type] !== 'function') throw Error('event handler must be a function: ' + type)

    this.options[type].call(this, this.element, this.options, details)
  }

  var getInstance = function (element, options) {
    var instance = null

    if (!element.data(pluginName)) {
      instance = new Plugin(element, options || {})

      element.data(pluginName, instance)
    } else {
      instance = element.data(pluginName)
    }

    return instance
  }

  var eventBinder = function (name, handler) {
    if (typeof name !== 'string') throw Error('event name is expected to be a string but got: ' + typeof name)
    if (typeof handler !== 'function') throw Error('event handler is not a function for: ' + name)

    this.options[name] = handler
  }

  $.fn[pluginName] = function (options) {
    var instance = getInstance($(this[0]), options)

    return instance
  }
})(window.jQuery || window.cash, 'sidebar')


// slider Speed Control
var myCarousel = document.querySelector('#carouselId')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true
})