/**
 * FormSubmit Integration Utility for Vercel Static Deployment
 * FormSubmit Hash Endpoint: https://formsubmit.co/8e0da65c99c09a2264ca0a270a40f871
 */
export async function sendEmailToIndigo(data) {
  return new Promise((resolve) => {
    try {
      // Create hidden iframe target to prevent page redirect on Vercel
      let iframe = document.getElementById('indigo_form_target_iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'indigo_form_target_iframe';
        iframe.name = 'indigo_form_target_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Create standard HTML form submitting to FormSubmit hash URL
      const form = document.createElement('form');
      form.action = 'https://formsubmit.co/8e0da65c99c09a2264ca0a270a40f871';
      form.method = 'POST';
      form.target = 'indigo_form_target_iframe';

      const fields = {
        name: data.name || "Website Visitor",
        email: data.email || "",
        websiteUrl: data.websiteUrl || data.website || "",
        message: data.message || data.slot || "New Website Enquiry",
        _subject: "New website enquiry",
        _replyto: data.email || "",
        _template: "table",
        _autoresponse: `Hi ${data.name || 'there'},\n\nThank you for reaching out to Indigo AI!\n\nWe have received your enquiry regarding ${data.websiteUrl || data.website || 'your website'}.\n\nOur team is reviewing your details and will follow up with you shortly.\n\nBest regards,\nKhaylen Jacobs | Indigo AI`
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
      console.log("FormSubmit submission notice:", err);
      resolve(true);
    }
  });
}
