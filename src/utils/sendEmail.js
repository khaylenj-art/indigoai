/**
 * Formspree Integration Utility for Indigo AI
 * Target Endpoint: https://formspree.io/f/xjygyrzo
 */
export async function sendEmailToIndigo(data) {
  try {
    const response = await fetch('https://formspree.io/f/xjygyrzo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: data.name || "Website Visitor",
        email: data.email || "",
        websiteUrl: data.websiteUrl || data.website || "",
        message: data.message || data.slot || data.subject || "New Website Enquiry",
        subject: data.subject || `New Enquiry from ${data.name || 'Website Visitor'}`,
        _replyto: data.email || ""
      })
    });

    if (response.ok) {
      return true;
    }
  } catch (err) {
    console.warn("Formspree fetch submission notice, falling back to form post:", err);
  }

  // Fallback iframe form submit to Formspree hash URL
  return new Promise((resolve) => {
    try {
      let iframe = document.getElementById('indigo_form_target_iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'indigo_form_target_iframe';
        iframe.name = 'indigo_form_target_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      const form = document.createElement('form');
      form.action = 'https://formspree.io/f/xjygyrzo';
      form.method = 'POST';
      form.target = 'indigo_form_target_iframe';

      const fields = {
        name: data.name || "Website Visitor",
        email: data.email || "",
        websiteUrl: data.websiteUrl || data.website || "",
        message: data.message || data.slot || data.subject || "New Website Enquiry",
        _subject: data.subject || "New website enquiry from Indigo AI",
        _replyto: data.email || ""
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      setTimeout(() => {
        if (form.parentNode) {
          document.body.removeChild(form);
        }
        resolve(true);
      }, 800);
    } catch (err) {
      console.error("Formspree fallback error:", err);
      resolve(true);
    }
  });
}

