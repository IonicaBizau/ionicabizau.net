If you have any questions, just send me a message. If you just want to say "Hi", that's cool too.

<div id="mb-error" class="animated message-box error hide"></div>
<div id="mb-success" class="animated message-box success hide"></div>
<form id="contact-form" class="contact-form animated" action="/contact" method="POST">
    <input type="hidden" name="formId" value="contact">
    <div>
        <label>
            <span>Name</span>
            <input name="name" type="text" tabindex="1" autofocus="" />
        </label>
    </div>
    <div>
        <label>
            <span>Email</span>
            <input name="email" type="text" tabindex="2" />
        </label>
    </div>
    <div>
        <label>
            <span>Subject</span>
            <input name="subject" type="text" tabindex="3" />
        </label>
    </div>
    <div>
        <label>
            <span>Message</span>
            <textarea name="message" tabindex="4"></textarea>
        </label>
    </div>
    <div>
        <input type="submit" value="Send" />
    </div>
</form>
<script src="/js/contact-handlers.js"></script>
