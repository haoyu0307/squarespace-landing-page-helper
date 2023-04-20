import "./App.css";

function App() {
  return (
    <div className="emergency-custom">
      <div className="relative w-full h-460px">
        <img
          src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/7a69ed7f-ee49-42e4-a1b0-964ca9ef8c2d/alternative.png?content-type=image%2Fpng"
          alt="Alternative"
          className="absolute left-100px top-20px w-167px h-57px z-10"
        />
        <img
          src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/48addd3f-d059-41fa-9262-902368b7213b/blue_skye_insurance.png?content-type=image%2Fpng"
          alt="blue sky"
          className="absolute w-full h-full"
        />
        <div className="pt-100px lg:pt-146px ml-40px lg:ml-100px sm:w-1/2 z-10 relative">
          <h1 className="lg:text-5xl font-bold text-primary leading-[32px] lg:leading-[52px] sm:text-[30px] text-[30px]">
            We’ve recovered $1B in unclaimed insurance reimbursements.
          </h1>
          <h1 className="mt-2 lg:text-5xl font-bold text-secondary leading-[52px] z-20 sm:text-[40px] text-[40px]">
            Get yours with
            <br />
            Alternative Claims.
          </h1>
        </div>
      </div>
      <div className="content-layout mb-0 md:mb-100px text-center sm:text-left">
        <p className="mt-10px sm:w-2/5 text-lg text-tertiary">
          Time is money. That's why it's important to get the most out of your
          claims for grounded vehicles damaged by a third party. We can go back
          to recover on past claims up to six years old. Just give us the
          paperwork and we’ll handle the rest!
        </p>
        <button className="mt-43px mb-72px w-196px h-52px bg-secondary text-white text-lg hover:opacity-80">
          Contact Us
        </button>
        <img
          src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/85edda20-e0b7-49b7-aaa2-81f82b644a7b/insurance_reimbursement.png?content-type=image%2Fpng"
          alt="ambulance"
          className="absolute hidden md:block md:top-[200px] lg:top-73px right-0 md:max-w-md lg:max-w-lg xl:max-w-full"
        />
        <img
          src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/85edda20-e0b7-49b7-aaa2-81f82b644a7b/insurance_reimbursement.png?content-type=image%2Fpng"
          alt="ambulance"
          className="block md:hidden"
        />
      </div>
      <div className="content-layout mt-62px mb-97px flex flex-col md:flex-row gap-x-34px gap-y-52px">
        <div className="flex-1 relative h-[194px] bg-tertiary text-white flex flex-col justify-between">
          <div className="absolute left-0 w-13px h-full bg-secondary"></div>
          <h4 className="lg:mt-[25px] mt-[12px] ml-[20px] lg:ml-40px w-4/5 lg:text-2xl text-xl">
            “They were able to recover $300,000 for us on some old claims that
            we had given up on recovering.”
          </h4>
          <div className="mt-12px lg:ml-40px ml-[20px] mb-16px font-normal flex flex-col sm:flex-row items-baseline">
            <span className="sm:text-lg text-sm"> Kim Godden, </span>
            <span className="ml-1 sm:text-base text-sm">
              VP Superior Ambulance
            </span>
          </div>
          <img
            src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/ff174e75-353e-416a-9b61-aa896ce07a4b/avatar_KimGodden.png?content-type=image%2Fpng"
            alt="Kim Godden, VP Superior Ambulance"
            className="absolute lg:w-[97px] lg:h-[97px] w-[70px] h-[70px] lg:right-[31px] right-[20px] bottom-[-33px]"
          />
        </div>
        <div className="flex-1 relative h-[194px] bg-tertiary text-white flex flex-col justify-between">
          <div className="absolute left-0 w-[13px] h-full bg-secondary"></div>
          <h4 className="lg:mt-[25px] mt-[12px] ml-[20px] lg:ml-[40px] w-4/5 lg:text-2xl text-xl">
            “They reviewed and found money we hadn’t collected. You don’t pay
            anything until you’ve received compensation.”
          </h4>
          <div className="mt-[12px] lg:ml-40px ml-[20px] mb-[16px] font-normal flex flex-col sm:flex-row items-baseline">
            <span className="sm:text-lg text-sm"> Wayne Jurecki, </span>
            <span className="ml-1 sm:text-base text-sm">Bell Ambulance</span>
          </div>
          <img
            src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/eba556de-9336-4197-86dd-e82d0c5e9f76/avatar_WayneJurecki.png?content-type=image%2Fpng"
            alt="Wayne Jurecki, Bell Ambulance"
            className="absolute lg:w-[97px] lg:h-[97px] w-[70px] h-[70px] lg:right-[31px] right-[20px] bottom-[-33px]"
          />
        </div>
      </div>
      <div className="pt-29px pb-110px flex flex-col items-center">
        <h2 className="px-[20px] text-40px font-bold text-primary text-center leading-none">
          We want wins as much as you.
        </h2>
        <h2 className="px-[20px] pt-[20px] text-40px font-bold text-primary text-center leading-none">
          We only get paid when you collect.
        </h2>
        <div className="mt-38px grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-x-36px gap-y-32px">
          <div className="relative lg:py-[25px] lg:px-[28px] py-[10px] px-[10px] aspect-7/4 lg:h-[287px] h-[200px] bg-silver overflow-hidden">
            <h5 className="w-3/4 lg:text-2xl text-base font-bold text-secondary">
              Claims recovery dating back to 6 years.
            </h5>
            <p className="mt-[5px] w-1/2 lg:text-base text-sm font-normal text-tertiary">
              We’ll help you recover the full compensation that you were owed
              for accidents, even if it was years ago. Just give us the
              paperwork and we’ll handle the rest.
            </p>
            <img
              src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/349ee61d-a617-492a-be42-f3071803b64e/claims_recovery_dating.png?content-type=image%2Fpng"
              alt="Claims recovery dating back to 6 years."
              className="absolute right-0 top-0 h-full"
            />
          </div>
          <div className="relative lg:py-[25px] lg:px-[28px] py-[10px] px-[10px] aspect-7/4 lg:h-[287px] h-[200px] bg-silver overflow-hidden">
            <h5 className="w-3/4 lg:text-2xl text-base font-bold text-secondary">
              Upfront fees? Not here.
            </h5>
            <p className="mt-[10px] w-1/2 lg:text-base text-sm font-normal text-tertiary">
              We’re fully aligned with your best interests. We only get paid
              when you get paid. We’re the leading performance-based claims
              recovery experts.
            </p>
            <img
              src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/c863be44-8748-4052-8458-305d07fbbf7a/upfront_fees.png?content-type=image%2Fpng"
              alt="Upfront fees? Not here."
              className="absolute right-0 top-0 h-full"
            />
          </div>
          <div className="relative lg:py-[25px] lg:px-[28px] py-[10px] px-[10px] aspect-7/4 lg:h-[287px] h-[200px] bg-silver overflow-hidden">
            <h5 className="w-3/4 lg:text-2xl text-base font-bold text-secondary">
              Get what’s rightfully yours.
            </h5>
            <p className="mt-[10px] w-1/2 lg:text-base text-sm font-normal text-tertiary">
              Much more than just damages, we know nine different ways to win
              back unclaimed insurance benefits after an accident.
            </p>
            <img
              src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/b825632b-e238-4f9c-8fa0-55c9df706bc2/get_whats_yours.png?content-type=image%2Fpng"
              alt="Get what’s rightfully yours."
              className="absolute right-0 top-0 h-full"
            />
          </div>
          <div className="relative lg:py-[25px] lg:px-[28px] py-[10px] px-[10px] aspect-7/4 lg:h-[287px] h-[200px] bg-silver overflow-hidden">
            <h5 className="w-3/4 lg:text-2xl text-base font-bold text-secondary">
              It’s a fight to get what you’re owed. Let us fight for you.
            </h5>
            <p className="w-1/2 mt-[10px] lg:text-base text-sm font-normal text-tertiary">
              Winning back additional funds from your insurance company isn’t
              easy. We put our knowledge to work for you.
            </p>
            <img
              src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/ee8550f2-fe94-4362-a41f-4cf7c9cbed25/fight_to_get_owed.png?content-type=image%2Fpng"
              alt="It’s a fight to get what you’re owed. Let us fight for you."
              className="absolute right-0 top-0 h-full"
            />
          </div>
        </div>
      </div>
      <div className="content-layout mt-[62px] mb-[97px] flex flex-col md:flex-row gap-x-34px gap-y-52px">
        <div className="flex-1 relative h-[194px] bg-tertiary text-white flex flex-col lg:justify-between">
          <div className="absolute left-0 w-[13px] h-full bg-secondary"></div>
          <h4 className="lg:mt-[25px] mt-[12px] ml-[20px] lg:ml-40px w-4/5 lg:text-2xl text-xl">
            “ACM settled 7 claims so far resulting in over $235K in
            reimbursements we were owed.”
          </h4>
          <div className="mt-12px lg:ml-40px ml-[20px] mb-16px font-normal flex flex-col sm:flex-row items-baseline">
            <span className="sm:text-lg text-sm"> Ron Quaranto, </span>
            <span className="ml-1 sm:text-base text-sm">
              EVP Cataldo Ambulance Service
            </span>
          </div>
          <img
            src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/6d2f38d8-8e81-4322-a421-2a9df48104fe/avatar_RonQuaranto.png?content-type=image%2Fpng"
            alt="Ron Quaranto, EVP Cataldo Ambulance Service"
            className="absolute lg:w-[97px] lg:h-[97px] w-[70px] h-[70px] lg:right-[31px] right-[20px] bottom-[-33px]"
          />
        </div>
        <div className="flex-1 relative h-[194px] bg-tertiary text-white flex flex-col lg:justify-between">
          <div className="absolute left-0 w-[13px] h-full bg-secondary"></div>
          <h4 className="lg:mt-[25px] mt-[12px] ml-[20px] lg:ml-[40px] w-4/5 lg:text-2xl text-xl">
            “ACM recovered $10,000 in Loss of Revenue for $2,800 in damage, give
            them a try.”
          </h4>
          <div className="mt-[12px] lg:ml-40px ml-[20px] mb-[16px] font-normal flex flex-col sm:flex-row items-baseline">
            <span className="sm:text-lg text-sm"> Paul Scarborough, </span>
            <span className="ml-1 sm:text-base text-sm">Premier Ambulance</span>
          </div>
          <img
            src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/ab9fdf00-d885-41b4-978e-30c3ef58a9de/avatar_PaulScarborough.png?content-type=image%2Fpng"
            alt="Paul Scarborough, Premier Ambulance"
            className="absolute lg:w-[97px] lg:h-[97px] w-[70px] h-[70px] lg:right-[31px] right-[20px] bottom-[-33px]"
          />
        </div>
      </div>
      <div className="truck-background relative overflow-hidden">
        <div className="relative">
          <h3 className="pt-[139px] lg:text-6xl text-4xl text-white font-bold text-center z-10">
            Time to stop leaving money on the table.
          </h3>
          <h4 className="mt-2 lg:text-[40px] text-[30px] text-white font-normal text-center">
            Win back more funds now before it's too late.
          </h4>
        </div>
        <div className="mt-[78px] mx-[20px] grid md:grid-cols-3 gap-x-[100px]">
          <div className="relative flex flex-col items-center mb-[30px]">
            <img
              src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/dbde8826-4aa8-45b5-8423-423df17e0e47/submit_claims.png?content-type=image%2Fpng"
              alt="Submit claims"
              className="md:h-[96px] h-[120px]"
            />
            <div className="flex flex-row justify-center items-start">
              <span className="text-[80px] font-bold text-ocean">1</span>
              <p className="mt-[30px] ml-[10px] w-[170px] text-xl text-white font-normal leading-6">
                Submit claims and necessary documentation.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center mb-[30px]">
            <img
              src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/8ed526cc-114c-4fda-8061-570e9cfd309c/we_work.png?content-type=image%2Fpng"
              alt="We work"
              className="md:h-[96px]  h-[120px]"
            />
            <div className="flex flex-row justify-center items-start">
              <span className="text-[80px] font-bold text-ocean">2</span>
              <p className="mt-[30px] ml-[10px] w-[170px] text-xl text-white font-normal leading-6">
                We’ll get to work - going all out to recover your claim.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center mb-[30px]">
            <img
              src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/69c93d0b-ffa3-41f2-bc49-5545821717af/receive_payment.png?content-type=image%2Fpng"
              alt="Receive payment"
              className="h-[96px]"
            />
            <div className="flex flex-row justify-center items-start">
              <span className="text-[80px] font-bold text-ocean">3</span>
              <p className="mt-[30px] ml-[10px] w-[170px] text-xl text-white font-normal leading-6">
                Receive payment after the new claim is settled
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <h3 className="pt-[96px] pb-[19px] lg:text-[40px] text-[30px] font-bold text-primary text-center">
          ACM is perfect for
        </h3>
        <div className="lg:mx-[241px] mx-[50px] flex md:flex-row flex-col items-center">
          <div className="relative flex-1">
            <img
              src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/4808c4c0-db4f-4e44-9c13-a00ce217f847/ambulance_ems.png?content-type=image%2Fpng"
              alt="ambulance / ems"
              className=""
            />
            <div className="absolute bottom-0 left-0 right-0 py-[17px] text-center z-0">
              <span className="absolute inset-0 bg-tertiary opacity-50 -z-1"></span>
              <span className="text-white font-normal text-xl z-40">
                AMBULANCE / EMS
              </span>
            </div>
          </div>
          <div className="relative flex-1">
            <img
              src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/4a0c5b0d-973f-4347-8e4f-d0495669c11d/speciality_fleet.png?content-type=image%2Fpng"
              alt="large speciality fleet"
              className=""
            />
            <div className="absolute bottom-0 left-0 right-0 py-[17px] text-white font-normal text-xl text-center z-0">
              <span className="absolute inset-0 bg-tertiary opacity-50 -z-1"></span>
              <span className="text-white font-normal text-xl z-40">
                LARGE SPECIALITY FLEET
              </span>
            </div>
          </div>
        </div>
        <button className="mt-[61px] mb-[85px] w-196px h-[52px] bg-ocean text-white text-lg hover:opacity-80">
          Contact Us
        </button>
        <img
          src="https://images.squarespace-cdn.com/content/5c57a321da50d32f334e0156/4d71c4c3-e8fd-48e1-91e7-6e9abdc72c86/footer_svg.png?content-type=image%2Fpng"
          alt="footer svg"
          className="absolute -bottom-8 -left-4 w-1/3"
        />
      </div>
    </div>
  );
}

export default App;
