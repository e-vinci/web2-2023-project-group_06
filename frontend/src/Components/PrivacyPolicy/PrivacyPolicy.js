import { Modal } from 'bootstrap';
import { checkPrivacy, setPrivacy } from '../../utils/privacy';

const PrivacyPolicy = () => {
  const privacyRead = checkPrivacy();
  if (privacyRead) {
    return;
  }

  const privacyPolicyWrapper = document.querySelector('#privacyPolicyWrapper');
  const privacyPolicy = `
    <div class="modal fade" id="privacyPolicyModal">
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="privacyPolicyModalLabel">Privacy Policy</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h1>Privacy Policy</h1>

                <p>Welcome to [Your Company Name]. This privacy policy is meant to inform users of our site about the information we collect, how we use it, and what rights you have in relation to your personal information.</p>

                <h2>Information Collection</h2>
                <p>We collect information when you register on our site, log into your account, make a purchase, participate in a survey, and/or when you log out. The collected information includes your name, email address, phone number, and/or credit card.</p>

                <h2>Information Use</h2>
                <p>All the information we collect from you may be used to:</p>
                <ul>
                    <li>Personalize your experience and meet your individual needs</li>
                    <li>Provide customized advertising content</li>
                    <li>Improve our website</li>
                    <li>Improve customer service and your support needs</li>
                    <li>Contact you via email</li>
                    <li>Administer a contest, promotion, or survey</li>
                </ul>

                <h2>E-commerce Privacy</h2>
                <p>We are the sole owners of the information collected on this site. Your personal information will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</p>

                <h2>Disclosure to Third Parties</h2>
                <p>We do not sell, trade, or transfer your personally identifiable information to third parties. This does not include trusted third parties who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.</p>

                <h2>Information Protection</h2>
                <p>We implement a variety of security measures to maintain the safety of your personal information. We use state-of-the-art encryption to protect sensitive information transmitted online. We also protect your information offline. Only employees who need to perform a specific job (for example, billing or customer service) have access to personally identifiable information. The computers and servers used to store personally identifiable information are kept in a secure environment.</p>

                <h2>Consent</h2>
                <p>By using our site, you consent to our privacy policy.</p>
            </div>
            <div class="modal-footer">
                <button id = 'consentButton' type="button" class="btn btn-secondary" data-bs-dismiss="modal">I succumb 😰</button>
            </div>
        </div>
    </div>
</div>
    `;
  privacyPolicyWrapper.innerHTML = privacyPolicy;
  const modal = new Modal(document.querySelector('#privacyPolicyModal'));
  modal.show();

  const okBtn = document.querySelector('#consentButton');
  okBtn.addEventListener('click', () => {
    setPrivacy();
  });  
};

export default PrivacyPolicy;