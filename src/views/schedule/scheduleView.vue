<template>
  <BannerItem></BannerItem>
  <div
    class="bg-cover bg-center text-black py-10 w-full h-full flex flex-col justify-center items-center"
  >
    <div class="max-w-screen-xl mt-10 px-4 md:px-20">
      <div>
        <h1 class="mb-16 font-extrabold font-mono text-4xl text-center">대회 일정(포스터)</h1>
      </div>
      <div>
        <img src="/images/gameSchedule.jpeg" alt="Schedule Image" />
      </div>
    </div>
    <div class="py-20 max-w-screen-xl px-4 md:px-20 w-full">
      <div>
        <h1 class="mb-16 mt-10 font-extrabold font-mono text-4xl text-center">대회 일정(상세)</h1>
      </div>
      <div>
        <div class="font-bold text-2xl text-left my-10">WEEK 1</div>
        <div class="font-semibold text-lg mb-1">9월 2일, 토요일</div>
        <table class="p-10 w-full table-auto bg-white rounded-2xl border-black">
          <thead class="text-left">
            <tr class="border-b-2">
              <th class="text-xs sm:text-base pl-2 py-2">홈</th>
              <th class="text-xs sm:text-base pl-2 py-2">어웨이</th>
              <th class="text-xs sm:text-base pl-2 py-2">시간</th>
              <th class="text-xs sm:text-base pl-2 py-2">구분</th>
              <th class="text-xs sm:text-base pl-2 py-2">중계</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="text-xs sm:text-base pl-2 py-3">
                <div class="flex items-center mr-2">
                  <img
                    src="https://i.namu.wiki/i/WUz-mBdL6OhaaIo3hjA1DFTWkODoCsV5KSFUEsRCV-pxnVgoxSBcm7n4QTw2ZE9ug3EFlh6xCJESbRGFrA7vulfrkTCDyIqKglA3zZZqsUc2_QTNFUFSaSUno0cZHD6EyiR7A_EVJrJHoCjid3Nk1Q.webp"
                    alt="성균관대학교로고"
                    class="h-9 w-9 mr-2"
                  />
                  <div class="hidden sm:block w-28">성균관대학교</div>
                </div>
              </td>
              <td class="text-xs sm:text-base pl-2 py-3">
                <div class="flex items-center mr-2">
                  <img
                    src="https://i.namu.wiki/i/GCxQujcmFwjmtdZSvt36cBAACbSs9XoBOTKfnprwp1tO0hU6FDDxVO652OGodQNMm31jmA0cd49zGWSap3sggU6h4Ms-Rzo5s32vJdcFLsDdkifGmaK-qYI50-jgGjNmIFFmEAf_BK_00Al9UJhmvw.webp"
                    alt="연세대학교로고"
                    class="h-9 w-9 mr-2"
                  />
                  <div class="hidden sm:block w-28">연세대학교</div>
                </div>
              </td>
              <td class="text-xs sm:text-base pl-2 py-3">10:00</td>
              <td class="text-xs sm:text-base pl-2 py-3">서울 1부 1조</td>
              <td class="text-xs sm:text-base pl-2 py-3">
                <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
              </td>
            </tr>
            <tr class="bg-[#F7F7F4]">
              <td class="text-xs sm:text-base pl-2 py-3">
                <div class="flex items-center mr-2">
                  <img
                    src="https://i.namu.wiki/i/8U6voVmzgvPupbYPgfR6imBNYJD3E77RLrw53BvgGojB7hU2yqOj07uBWNGb2kQQcSTdztaJZ_xMhZ2BE8X-zcbHcctjzkJvO-_xC9J4ymtziA7siA79WxDYWB0eQ5jfEgY85Y7uXEXvLrUg1_P81Q.webp"
                    class="h-9 w-9 mr-2"
                    alt="서울대학교로고"
                  />
                  <div class="hidden sm:block w-28">서울대학교</div>
                </div>
              </td>
              <td class="text-xs sm:text-base pl-2 py-3">
                <div class="flex items-center mr-2">
                  <img
                    src="https://i.namu.wiki/i/kEPxnvVHpyMojY09zi8R7ERHOZli4jtZjpmm-x37xiTI1eU69tPz8y7cjNepVaGCewlABj_OpoBv7hUa0Y924Mkws5uxrTrC4HptABs-LF-edfWLQcfRhTSwl0CwvScb9OluQMv9PMqZR9sKSst52A.webp"
                    class="h-9 w-9 mr-2"
                    alt="한양대학교로고"
                  />
                  <div class="hidden sm:block w-28">한양대학교</div>
                </div>
              </td>
              <td class="text-xs sm:text-base pl-2 py-3">13:00</td>
              <td class="text-xs sm:text-base pl-2 py-3">서울 1부 1조</td>
              <td class="text-xs sm:text-base pl-2 py-3">
                <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div>
        <div>
          <div class="font-semibold text-lg mb-1">9월 3일, 일요일</div>
          <table class="p-10 w-full table-auto border-rounded bg-white rounded-2xl">
            <thead class="text-left">
              <tr class="border-b-2">
                <th class="text-xs sm:text-base pl-2 py-2">홈</th>
                <th class="text-xs sm:text-base pl-2 py-2">어웨이</th>
                <th class="text-xs sm:text-base pl-2 py-2">시간</th>
                <th class="text-xs sm:text-base pl-2 py-2">구분</th>
                <th class="text-xs sm:text-base pl-2 py-2">중계</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/ZO2us6sW6EGx9pm6zxfrBfTWc7Z8Vr62eRfMBzDL2HAiEScd93PY5qxlNCLQHrrTzML13mVfo-7ukDM59SHtJpyvW3Nd-O_76ID38CGQoGB3piyUG0vSVdnRC6T7L-Yvr45w9Ss4EcEvMrhUvX9cAQ.webp"
                      alt="한국외국어대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">한국외국어대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/lkVJfYRPG-7f92t49xv4PcCjuUpDQc72XSshmachxpjlgndc7OjU0ccQK8GIL88LWVRbljEZ5zQm-qLlkOXKBIHzpK9iS-CxP50lovk19LMwnXp7icdsAuHOxZR00pfqmGg3-jWJbKVve8CkaiDF6w.webp"
                      alt="서울시립대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-28">서울시립대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">10:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부 2조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-[#F7F7F4]">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/jeJjrehvssnniXBt9D1jNzuzL29Wk2h-mnrAyGtJqMqeBONjU50OJihFV0M_xW7pEWhCZxoAIUgC2MqWG20ibl26xgX7JKsiiFXDo7PWsZvrN2HKAxP3I01FJZRzZPJROFHRoXjvgAd2TFiln0JM6g.webp"
                      class="h-9 w-9 mr-2"
                      alt="고려대학교로고"
                    />
                    <div class="hidden sm:block w-28">고려대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/IrRy0xT7o0mF9EN9YTJILSjNhEETnqOCWOp0OW-xLklEOKl4KheN8juQ721pzHcWL5nrSW7pKJczfvFWOgf2wjgFVEHYHx5F3oMevFe9fES_91UjqujpMB6qrr505emdUWVXrLGHorRzNbrl_nvgDw.webp"
                      class="h-9 w-9 mr-2"
                      alt="동국대학교로고"
                    />
                    <div class="hidden sm:block w-28">동국대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">13:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부 2조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/KEdpnIJ_4zflJ_SxgvzMqI3qbsJB4A1IT2peEMaiQc4bqrxFgQ_t7dZoxA8WMRmbBAfNy6I6d7rQozNxxSGGCKsIXmwdmbWn5Fd4IPnzGhTNXXxs2AQwUKKLvA4CPaFBPILOkkDqIYsdQy5onCpjsA.webp"
                      class="h-9 w-9 mr-2"
                      alt="건국대학교로고"
                    />
                    <div class="hidden sm:block w-28">건국대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/CDM23lzSV-2Ik03CUwfWNNkY2VSreTV3zRhXHxx49CGJL9hbVKXpHJ1BjDE8mHhQgUCSnBSAsQzrlMd6XhAQ1zmi5fO32J2xb1AclZrIkye-KjfazT2CEUBAxtvWm_8VcYEqbdgTbPvVuHMc0jpJRQ.webp"
                      class="h-9 w-9 mr-2"
                      alt="서강대학교로고"
                    />
                    <div class="hidden sm:block w-28">서강대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">16:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 2부 II조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <div>
          <div class="font-bold text-2xl text-left my-10">WEEK 2</div>
          <div class="font-semibold text-lg mb-1">9월 9일, 토요일</div>
          <table class="p-10 w-full table-auto bg-white rounded-2xl border-black">
            <thead class="text-left">
              <tr class="border-b-2">
                <th class="text-xs sm:text-base pl-2 py-2">홈</th>
                <th class="text-xs sm:text-base pl-2 py-2">어웨이</th>
                <th class="text-xs sm:text-base pl-2 py-2">시간</th>
                <th class="text-xs sm:text-base pl-2 py-2">구분</th>
                <th class="text-xs sm:text-base pl-2 py-2">중계</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/IrRy0xT7o0mF9EN9YTJILSjNhEETnqOCWOp0OW-xLklEOKl4KheN8juQ721pzHcWL5nrSW7pKJczfvFWOgf2wjgFVEHYHx5F3oMevFe9fES_91UjqujpMB6qrr505emdUWVXrLGHorRzNbrl_nvgDw.webp"
                      alt="동국대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">동국대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/ZO2us6sW6EGx9pm6zxfrBfTWc7Z8Vr62eRfMBzDL2HAiEScd93PY5qxlNCLQHrrTzML13mVfo-7ukDM59SHtJpyvW3Nd-O_76ID38CGQoGB3piyUG0vSVdnRC6T7L-Yvr45w9Ss4EcEvMrhUvX9cAQ.webp"
                      alt="한국외국어대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-auto">한국외국어대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">10:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부 2조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-[#F7F7F4]">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/nRkKcFEJyKHw1YFxW06TItspv55YMAO8IV18aV5HcJNlrXJOY2mWYZyumMN1DL4DGrTHr7oF-bVJfjLxZpkOVt2fMNWLvNc0MmOD8Z3T10iNjuntvEkJiGbgsxifKrpa4QwRoatHmgYY9JP9fGiwiQ.webp"
                      class="h-9 w-9 mr-2"
                      alt="단국대학교로고"
                    />
                    <div class="hidden sm:block w-28">단국대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/2Gl5lQw3uK6LdRYy7PIUmnMk1fsvr25kxHCkoCUpsOlwoJGbdJC0btoBD6KinlLUq5mLrC88qTvb43kd12mIKzP7bmgyz4Wwzi5q3nbikaPWrqlYC8zDF0xARI1T5iwVDFtlZfJVMzK6hXyNjhuzXg.webp"
                      class="h-9 w-9 mr-2"
                      alt="한림대학교로고"
                    />
                    <div class="hidden sm:block w-28">한림대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">13:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">중부 1조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="숭실대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">숭실대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/h9zMFD7oOPuoqY0PRMMmKB4yGcblV6sCM0d4ia4LTLK0EFMX75yFGoj8Uw_ddu9Ra8YK-rFGnSXtqczJm0KII2-sedIa9B8c4qfKj7iMvCR5IN49Kz6etPTjyIJEpad7ujp2ucjX81WPBUFtOJZuZg.webp"
                      alt="홍익대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-auto">홍익대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">16:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 2부 I조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div>
          <div class="font-semibold text-lg mb-1">9월 10일, 일요일</div>
          <table class="p-10 w-full table-auto bg-white rounded-2xl border-black">
            <thead class="text-left">
              <tr class="border-b-2">
                <th class="text-xs sm:text-base pl-2 py-2">홈</th>
                <th class="text-xs sm:text-base pl-2 py-2">어웨이</th>
                <th class="text-xs sm:text-base pl-2 py-2">시간</th>
                <th class="text-xs sm:text-base pl-2 py-2">구분</th>
                <th class="text-xs sm:text-base pl-2 py-2">중계</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/Qlx1_HMAPtJZ3--LDPLVznc7RaZFbBPisGCHLCAaWiZwnKACX3U8YvQfv2F6judqC1C2HEjEkfGdPdGz1-SIgW3NzL8QMjECFYp0sFXbxex13xiq5HdG6Hc3YsLE_ugUiRllECI-SulrWp1s5W4CTw.webp"
                      alt="연세대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">연세대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/8U6voVmzgvPupbYPgfR6imBNYJD3E77RLrw53BvgGojB7hU2yqOj07uBWNGb2kQQcSTdztaJZ_xMhZ2BE8X-zcbHcctjzkJvO-_xC9J4ymtziA7siA79WxDYWB0eQ5jfEgY85Y7uXEXvLrUg1_P81Q.webp"
                      alt="서울대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-auto">서울대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">10:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부 1조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-[#F7F7F4]">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/CDM23lzSV-2Ik03CUwfWNNkY2VSreTV3zRhXHxx49CGJL9hbVKXpHJ1BjDE8mHhQgUCSnBSAsQzrlMd6XhAQ1zmi5fO32J2xb1AclZrIkye-KjfazT2CEUBAxtvWm_8VcYEqbdgTbPvVuHMc0jpJRQ.webp"
                      class="h-9 w-9 mr-2"
                      alt="서강대학교로고"
                    />
                    <div class="hidden sm:block w-28">서강대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/Oa6ahKe0AVYW4-N3I7rzUH9zjPYr9xu6LX9KbfVYCshIleQ4ilLwMSfhVHk3i8w_0LqsiI3MD7YUAIW5SiUKMZsPVXkoLyR1SaL36NAUu6KaU3CeN4dYO8c4kVHZ-D0ptrDXR36O8IOfF1aqGDtENA.webp"
                      class="h-9 w-9 mr-2"
                      alt="국민대학교로고"
                    />
                    <div class="hidden sm:block w-28">국민대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">13:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 2부 II조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/lkVJfYRPG-7f92t49xv4PcCjuUpDQc72XSshmachxpjlgndc7OjU0ccQK8GIL88LWVRbljEZ5zQm-qLlkOXKBIHzpK9iS-CxP50lovk19LMwnXp7icdsAuHOxZR00pfqmGg3-jWJbKVve8CkaiDF6w.webp"
                      alt="서울시립대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">서울시립대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/jeJjrehvssnniXBt9D1jNzuzL29Wk2h-mnrAyGtJqMqeBONjU50OJihFV0M_xW7pEWhCZxoAIUgC2MqWG20ibl26xgX7JKsiiFXDo7PWsZvrN2HKAxP3I01FJZRzZPJROFHRoXjvgAd2TFiln0JM6g.webp"
                      alt="고려대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-auto">고려대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">16:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 2부 I조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <!-- Week 3 -->
        <div>
          <div class="font-bold text-2xl text-left my-10">WEEK 3</div>
          <div class="font-semibold text-lg mb-1">9월 16일, 토요일</div>
          <table class="p-10 w-full table-auto bg-white rounded-2xl border-black">
            <thead class="text-left">
              <tr class="border-b-2">
                <th class="text-xs sm:text-base pl-2 py-2">홈</th>
                <th class="text-xs sm:text-base pl-2 py-2">어웨이</th>
                <th class="text-xs sm:text-base pl-2 py-2">시간</th>
                <th class="text-xs sm:text-base pl-2 py-2">구분</th>
                <th class="text-xs sm:text-base pl-2 py-2">중계</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/HmXyjvAWTHJeJBE6UeGQ6_iHUD0gkntLceBr57ToLmwTbXvkvuOXlBUtfI5YLNxJNZT_-uDxN4CeYOZaNVW91vf_XR6vXoerv_Xq3hAct5ppOJuW8yl4IrKXGFUxL2eEbjtnwwMvESxIfIsDUqWTjA.webp"
                      alt="강원대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">강원대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/A5RjOK0FKDIuIXg7_nXJD1rGrsKAGzVlWYz7Yek7to9rHBSbGyEouYYldLFQN4VyEmB0MY7xDxCOIzHlo3taTH_KdoEr3ZiJxWZRB9jEyjSJLlCfayBYQLRzqUmMyqGOgmy77Zp-IgQJHb9VO_hrRA.webp"
                      alt="인하대학교"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-auto">인하대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">10:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">중부 2조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-[#F7F7F4]">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/nRkKcFEJyKHw1YFxW06TItspv55YMAO8IV18aV5HcJNlrXJOY2mWYZyumMN1DL4DGrTHr7oF-bVJfjLxZpkOVt2fMNWLvNc0MmOD8Z3T10iNjuntvEkJiGbgsxifKrpa4QwRoatHmgYY9JP9fGiwiQ.webp"
                      class="h-9 w-9 mr-2"
                      alt="한국외국어대학교로고"
                    />
                    <div class="hidden sm:block w-28">한국외국어대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/jeJjrehvssnniXBt9D1jNzuzL29Wk2h-mnrAyGtJqMqeBONjU50OJihFV0M_xW7pEWhCZxoAIUgC2MqWG20ibl26xgX7JKsiiFXDo7PWsZvrN2HKAxP3I01FJZRzZPJROFHRoXjvgAd2TFiln0JM6g.webp"
                      class="h-9 w-9 mr-2"
                      alt="고려대학교로고"
                    />
                    <div class="hidden sm:block w-28">고려대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">13:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부 2조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/psxddAheuATWEE8gCBoDSWUNbbyaKByY4aO2_v7STQl2wE5iISBX1thJC1ttpDylUf0kVQOrqQ37oKMG1GrG2GOjUQGyhMs1Q0dJlePXYnAeAji278v0zrTB8B15HOE7i2te65n7TJTGRRCvD5AvXw.webp"
                      alt="중앙대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">중앙대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAUExYTExMWFxYYGhkZFxkYGR4aGxgbGhcZGxgYHh8bICkhGRwmHhgeIjIiKCosLy8vHiA1OjUuOSkuLy4BCgoKDg0OHBAQHC4mICYuLi4sLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLC4uLi4uLi4uLi4uLi4uLi4uLi4uLv/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABwYIAQQFAwL/xABQEAACAQMBBAcEBgUJBQUJAAABAgMABBEFBhIhMQcTIkFRYXEyUoGRFCNCcpKhCGKCorEkM0NTY7KzwdEVRHOjwmST0uHwFhclNFR0g9Pi/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJhEAAgIBBAMAAgIDAAAAAAAAAAECEQMSITFBEzJRImEEcRRCUv/aAAwDAQACEQMRAD8AU/XP7zfM0dc/vN8zXnRXpUcR6dc/vN8zR1z+83zNedFKB6dc/vN8zR1z+83zNedFKB6dc/vN8zR1z+83zNfFfdvA7sEjRnc8lRSzH0A4moJDrn95vmaOuf3m+ZqfaD0Q6lNhpty3U+/25PwKf4sKnNr0SaTAu/dTPJ4mSQQp8N3B+bGspZYosscmIczsPtt8zX1HJI3sl29Mn+FPlNa2UtOEYtiw744jM34grH86xL0z6VHwjhnb7saoP3mFV8z6Rfx/WJAWd3/VT/gk/wBK8ZUmX2hKv3gw/jTvPTnY/wD01z/y/wDx19RdN+nNwaC5A+7G38Hp5Zf8k+OP0RAuW7nP4jX11z+83zNPw7ebN3PCZY8n+vt+X7W6R+dZ/wDYfZy9GbdowT3283L9gkqD+zTzrtEeL4xBdc/vN8zR1z+83zNNjW+hGZcm1uVfwSYbrfjXIP4RS513Zq9tDi4geMZwGxlD6OuV+Gc1pGcZGbg0c3rn95vmaOuf3m+Zr4rFXoqenXP7zfM0dc/vN8zXnRU0D065/eb5mjrn95vma86KUD065/eb5mjrn95vma86KUD065/eb5mjrn95vma86KUAooooQFFFFCTNAUngOZ4Ad5z3etbWmafNcSrDAheRzhVH5k9wA7yeAp6bL7GWOkQG7vZEMqjLSNxWMn7EQxkseWcbx7scqzyZFE0hCyG7GdElxcBZbwmCI8RGB9a48weEQ9cnnwHOptebRaJo6mGBFaXkY4QHkJ/tJGPD9o58BUG2q6Sb6/k+jWKPHGx3QqDM0o88fza+Q5d7V2tkOhngJb9/PqI2/vuOZ8l/Ea55NveTNVS9Tiah0naxev1VnH1WfswqZZcHxcjCjzCr619WPRRq123WXkwjz3yuZpPwg4H4h6U8tL0m3t0EcESRIO5FA+J8T5mt/FU1pcItp+it0zoSsEx1000p7wCI1+QBYfiqRWvRlo6f7ojffZ3/ALzGpRdXUcas8jqiKMszEKqgd5J4AVAL3pSV3aPTbOe9YHBdFKxA/e3SfmAPOo1SfZNIky7D6UOVjbf90v8ApXlNsDpDcDY24+6gU/NcGou22uvx9uXRWKd4jk3nx5Bd4n5VJdkduLS+3lQtHMntwyjdkXHM47x5jl34pcvopHJvuiHSJPZikiPjHK38H3h+VRPV+g5gd+1ugSOSzLg5/wCJHy/DTroopsjSivj3m02le2ZHiXvf+UREfeHbQepWpTs/0xWc46q+i6ne4Fh9ZE2feGN5R6gjxNNkioJtf0YWN3vOi9RMeO/GOyx/XTk3qMHzqbT5QpnF2i6LNPu0E9hIkRbiu4d+B/gD2PVeA8KT20Gz11ZydXcxFD9k80cDvVhwPpzHeBUkntNZ0OUspIjJ9oAvBL5MPsN64bwJpm7ObY6drERtriNVlI4wycQ2PtxN3kc+GGHpxrSM5Q/aKOKl/ZXqip70hdHE1jmaHeltvHm8Xk/iv6/zxzMCNdMZKStGEotGKKKKsVCiiigCiiigCiiigCtmxtJJpEiiQvI7BUUcyT/6znkOZrWp69EuysdnbtqN1hJHQsC3DqYQMknwZgMnywPGqZJ6UaQjqZ0ND0ey0Kzaedg0rACRwO07H2YY/LPzwSfJZzTalr13gDdReIXP1UCEkbzH7bnjx5k5AwBwzrGo3eu36xxArGCREpziKMe1M+PtHn+FRT42X2dgsoFghXgOLMfakY83Y95P5DAHAVyt1u+TfnZcGnsbsbaWEe7Eu9Iw+slbi7/+Ff1Rw9edSYCuZrmrx2sRnm3xGvtsql90e8QuTu+JAOPSuTB0h6O4yL6AfebdPybFZu3uWSolVaOrajFbwvPK26kalmPgB4eJPIDvOKi+r9KOkQKW+krKe5YRvkn1HZHxIqO2tpf626SXUbW+nKQyw5IkuCPZLngd38vDPtAl9JPDStOuddk+k3ZeLT1Y9Tbg467B9pyOY8/guMZLGneztY44m3IY2IijA7C7xB3UBXAUnBxxGT510YIVRQqqFVQAqgYCgcAAByAFJvp62kR+rsIu2ysJJsccHdKxx472O8Wx93xqV+Tog6HSFol/Yqb6wvLgRoQZYZJGlCgnG8vWE5UE8QeQ4g8K4Z1f/aVq9/EBDqdgBK7IMCWMZJJH2hgNwPLiOTVLNs9ZFpoywXDhriW3EG7nLM7RhHc+S5yT44HM0s+j+b6Pa6lePwQW/wBGTP25ZT2V88cCfAGrJfiCwmzWqi5tobgDAljV8e6SO0vwOR8K6lR/YTTGt7C2gcYdIk3x4MRvMPgSRUgrMkKxis0UBr3NskiMjorKwwysMgg8wQeBpK7fdE7RZudODEKd4wgnfjxx3ojzODx3c58CeVPKsGrRk0Q1Yo+jLpHFxu2d8w609mORsYm/UfuEnMfrevOM9KfR59EJurZT9HY9tP6kk8CP7Mn8J8sYk/Sx0dCUNeWiYlXtTRr/AEgHEuuOUg58Ofrz2OijbZb6JrK6w8yoeLcRPFjBz4uAcMO8cfGrqWl6o8FWr2Yh6xUw6Sdj20+4wgJt5ctEx7vGMnxXu8RjwNRCuyMk1aOaSp0YoooqSoUUUUAUUVmhJLOjHZj6beojrmGL6ybwIB7KftN3eAapp067U+zp0R4dmSfHziix6gOR5LXc6LrOPT9Je8mGDIrXD+PVqp6pPiOI83qA9G2nSajqbXMw3ghNxJnkXJ+qT0z+SVySeqTb4R0RVRr6NPos2QFjbBpB/KJgGkPeg+zEPId/ixPlU6qGw9I+miRobiQ20yHdeOZSuD94ZQjvBzxBBrdl290lRk31vjykUn5A5rF23bNEqJDLGCCCAQeBB5EeB8qUG13Rklu7XlpFDJEAxltrg7qBebGN95dw+AJ4ZPHHZrvXvS1aM3VWMM95L3CONlTPdvFhvAeYUitZNk9T1Jg+rSiG3zlbSE4zx4dY4JyfifLdqVaByOjG+sLmQCDRUjKHtzbwkWM8x2pBvb36o4/xpxjAqHaxtVpWlRiHeRdwdmCEBn/COC58WI9aXt5trdagsssitDZRsqCGJj111K/83b74Ge1wLbuML45Bo1e4Jttjtk4jdLOSNACUku5TiCI8mVOZmlHuqCAefHhSgspNOSXrI1vr+4Vt8umYE397e3uAeXOe849KaGzvRz1pS41MLI4GIrZOEFun2Ywo4MRyPd473tUxra0jjUJGioo5KoCgfACpUtJImrDTdPu362/g6kkDLzXV31gHHAzNGqcM8g2ONed1s3ANSsNPtZpHt4ybt0YoyJh97IKqN7e3N3LFvaGMA06L1SUYAsDg43QCfgGBB9DSj1XSo5J0MJS1v2+stbiHKQXgX2kZT/NyZ4Mhz3Z3hwomQOVazUR2B2q+mRukydVdQHcuIuW6w4b4Hutg+OOIyeZl1U4JCiiigCiiigPkikJ0p7MSafcx6hadhGk3uHKKbnjh/RyDPDl7Q7wKftcraLSIrq3lt5RlZFI8weasPNWAI8xVoypkNWRiRbfXNLBGFZxkd5hnTIx6A8PNW86rnc27xu0cilXRirKeYZTgj5imZ0R6pJY6jLp0/ASsyeQmjBwR5Oox59isdOuz3VXEd2gws43ZPASIOB/aQfumtsT0y0mWRWrFfRWaxXUc4UUUUAVuaTYNPPFAucyyInDu3mAJ+AOa06nHQzYiXVIieUSSS/ELuD85B8qrN1FstFWyf9OeoCCxhtI+HXOFx/ZQgEj8XVit7oO0fqbDriMPcOX/AGFO4g9OBP7VL/p41AyagsQ4iGFQB+vIzMfmu58qe2gWIgtoYByjjRPwqAa43tD+zpXsRrb3YKG+3Zl3UuI/YdlDo4Bz1cqn20/MefKorpd3pMEgh1PTLe0nHsuYQ0EvH2kfBCj15ePdThrU1DT4ZkMc0aSIeauoYH4GqWXIzc391uD/AGVFYSxkcGE2B+GNN396ojrGla/MCb7U7Wzh+0I33Bj17J+b1I7roj0V2LfRyhPuSOo+AzgfCvux6J9Fjbe+jb5/tHdx8icH5VKdATm0dhpEUEkdk013cAq0lxg9VEu8Cx4YHa5Z48zx8WP0Y6CuYd8cLWIFVPfdTostxIfEokkcYPd2q7XSZpcUej3UUEaRqEU7qKFGFkRjwHkK5/R5flIIWc8ZQJHPcOs+lTtj9mNB6AVLdxIGUBXhd3KRrvOcKOZ4/wCVcrWtYdOqjgRXkmyU3zuoiKAXlcjjurvKMDiSwHDnUf0fbAyOyR3FvesvFo7ZTFIBkDeTrJCkqgkZ7QwOPHlVKJPLa7pH05beUQ3UbThSYlXeY9YpygOBjG8BnJpabRbW2c4u4wzCKQJc2zBSDBdhQZEHAFVds5YcMknPHNNLaHZefUlCXKwwRZBG4OtuOB4YkOEj8CAHyCeNdHZ/YDTLTDRW6s45SSfWP8C3s/ACrppAWWiXGrXEtvf2lo4uREYrmSVQlvcKAOrlBJBZjgE7o5gd1Mro32na+tA8oCzxu0cy4xh1Ph3ZUjh3HI7q5m0+qtcn6NA4DMpltZlY4e5tZSZIW4Yx2Rw45G8e4VHNA1dLfU4rhOza6smSp4CK5U4dD4N1hIPm58Kh7gcdFYFZqoCiiigCsGs0GgEP06aY1vdwX0PZZ8cR3SwkMh9SMfgqebZQJqWjtLGCS0S3EQHMMo39319pfia8+mvTut0x3xloXSQeQ3txz+F2PwrU6CdR63TjE3EwyOnH3XxIvw7ZHwrS9lIr20V9BrNb+v2HUXNxDjAilkQfdVyF/dwa59dydqzlaphRRRQqZpr/AKPduDcXMmPZijUeW+7E/wCHSop0fo7xDdvH7y0Sn0USEf3jWWb1NMXsQ7aMfSdfdeYa7hjP3UMaH8lNWTAqt+zP1m0IJ45vLhvwmYj+FWRrlnwkdEezNFFFULBRRRQHM2i00XNtNbk462N48+BZSA3wPH4VXS92k1OxdbWZIlaAKmCpwyrFLGpzvDeUpMxyMd3gRVncUsOmqw6uOHU4gOutpEzkZDxs2N0+I3iB6M3jV4OnuCE2fSmJepiuYQFWKS3klibLGOVFVnCY4MGRG4HxArR2NtILW8SaHUrZym8qDqZ2L7ysuCigHkc4DcxTqv7LT5pIoJraFuuiaSMtGvHd3d9c4yDiQEYPj4UudvOiTqla404ud3LNCSSwGOJib2j90kk8cHuNlJccEUT/AE/UrmQcbrP/AA9PnQf8xmrdbSbt+I1GdB4LBAv+JESKR+i7QTW4AntZcjgf5KTw9WkXj8Klml9MFrEcNBL4ELEqn85z/CocH0CVjo2QHe+nXYPXm4BHUDExGGcYh7Oe8Dge8VCtutmSstvp1tdXEs9xObgrJ1W7DnO/N2I1ZCTvHAIBw3DPOTQdNGnsP5i7+ESsPTKyGtno102SWSbVrlSJrk4iRv6GAHCKPAtgE+QB7zVd0ST2BSFALbxAAJ8SOZ4eNe1YFZqoCiiigCiisUBw9tbXrbC6j72glA9erYr+YFJToc2wtLE3K3MpRJBEyYRmyRvhvYBxwxVgL1N6N18VYfMGqaR933a1gtUWiknTssXZa9s1e3CosUE08xOC9qcuQpJyzx+Cnme6lD0l6ckGpXEUaKkYZGRVAVQGiQ8AOAGc1pbDXHV39m/9vEPxHd/6qlXTtb7upBvfgjb4h5FP5KK0gtM6KTdxsXdFFFdJzhTw/R5H1F0f7VP8P/zpH07/ANHhvqbof2kZ+aH/AErHP6muL2ITsGf/AI+n/wBxc/3Z6snVa9j+xr6+V3cL8+uX/OrKVzz6/o3j2ZooorMsFFYJri6/tTY2gzczpGeYUnLt6IMsflQHbqA9Mj79j9FX+cuZoYYx4nrFYn0AWtZtub+6UnTrIrFx/lN2eqiA95Vzlx5g1DLrVYPpUUtxqM9/doT1UNjGvVoWBBCsQQfVe1VkgS3pM1JLW40jDAFJ8HJxiMqsTk+Aw9eWynSKZWjVklkj3rlGeOGSUjckU274jViQyMV+8ndxrjX96YyJbpbOxOOyblmvrwrnPBWJ3M5z5Zrq6cJ7llVUvJsgsrXlx9EjZcgFlggAd09Vxx58qdAmGpbUFY2aK2mdsHcDhIRvY7O917oVGfLPlSMh6OtWuXaQ9QzuxZz18bEsxyT2C3fTy0nZkRdoi3jPPEECp65d99mPnwrQ2i6SdMtPqzL10o4COHttnwJHZU+ROfKkZNcAjuyWlbQ2MC28dtZOiljlpGDsWYsckcDzxy5AV2ZNoNoIxltKhkA5lLpFH79c+PWdo77/AOXto7GI/wBJcdqTHiFIyD6r8a2Yui/ru1qN9c3R703zHF8FHL4EUf7BpXXS+sDbl3ZSxN3iOaKXGPRh+ddbSulrSJyFEsiN4PExx6lAyj1ziuzpew2lwY6qzhBHJmQO34nya7yRqowFAHgAAKi18B42OowzLvRSJIPFGDY9ccq0todorWziMtzIEXuHNnPuqo4sf/RwKjnSB0iW9gDGgEtwRwjB4Jnk0hHsjy5nyHGq/wCr6ldXsxklZ5pXzgAZwACSqKPZUAZwPDJ8atGDlv0Vckhk6j06TZxDZooJ7LSyFjjuyqgYPxNcw9Nerf1dr/3cn/7aguhwQyXEKTvuQtIgkfeC7qnmd48F9TTa/wDZjZjHYW5uPAwi4lB/ajXc/OryUI7NFU5S4OLD026jye3tm9BIv/U1K3cbuxyxz/8AKm5qWhaBGB/ItSUswRN5ZIlZm9ld+cqoz5muLrPRs8VsJOsVbmWUCK0DiRijHggYDtyDOSw7OAfWpjOC6DjIg2nXBSSN+RR42/C6nP5U1v0hYR11pIPtRyrnxCshH+Iai2zvRnqU8wSaCSGLeHWySALhQe0FGcsT3Y4V3unjVY5LmC3Tj9HRt/yaXcIT1Cop/aFWTuaohqosWFFFFdJzhTg/R3m+svE8VgYfAyg/xFJ+ml+j+4+l3A3sZgB3fHEgyfhn96s83qy+P2OHN9Tr58r9flJKCT+/VlRSM2i2LvrrVbq4tlixFNDkO+6d5YYJM8FPA5500ItenSWNLq3EKyncjkWUSJ1n2Y2O4pQtx3TxBIxzIzyTkmkdEVVklorANZqhY1b61WVCjFgrcDuO0bfBkIYfA1A9R6HdLkJZDPE5OSyyljnnn6zezTGoqU6AldqOibUpFwmoPcIvFI7h34fHLKT8BUM1GbVLFFtUtWtCwCs8KMZLgjv64ZLZ57qEAceGKs7WvdzJGjSOQFQFmJ7gBkn5Zqym+yKKy6Zp2pRTQ28NuILi4yVkYZnI470hLZaBMZOVCsd08TTLi2h07Sl+j2+/e3zn60p25JZB/WPxIxxwgyQM8OZqN6Vspqmq3Ut87yWsU2QGORIYcgLEi8CF3QAWOAeJw2TU30rYyzim+hwR7sUcayXLknrJzIWEURfmI/q3Z0XAOUHIsDMmgRK4nu9RYjUdRitIAcNbQNlgPdkK5C8+Icn7opj7HbL6XbRrJZxxNkcJgRIzD/iceHkMCpHb26IoRFVFAwFUBQB4ADgKjuuWq2pN7CAgUg3KjspLFkB5CBw6xB2g2MkKVJwRijdkkoxWawDUY212yttPiDynekbPVxKe058f1V8WP51AJKzAUn+kfpVKO1tp7qWAIkmxvBTy3Y+4sO9uIHLnyjO3/ShNegwW29Dbkds5xJIccVbB7Kd2Bz7+BxUKj0O5a3a7WM9QjKjSchljgBfeweBPIEitY4+5FHL4bGzWgXd/P1UKl3JLSSMTurk8Xdjk5PxJ86bezWzSRRTRWO6cJIlxfOoYyMFIeK3Tlug5BbioIx2zkiFdFOpTl5NOjcoLoqTIG3WjVAeuK9++0Y3QRyPHuqwcFlHHEIo1CIqbiqOAVQMAAUm3dCKVWVR2SbF5Zn/tEH+KlWf2p2jt7GITXBcIXCDdUsd4hiBgchhTxqq+isVmgJ5rLEflIv8ApT/6dI86Yx92WI/vFf8AqqZq5KyIukzWuOmDSHUq0czq3BlaJSCO/ILcR5VrQdIuztsGe1gCuRxENuImbyLEKMfGkTRWvgiZ+VjT1/pouZEKW0KwZGOsZuscfdGAoPmc0r5ZCzFmJZmJZiTkkk5JJPEkk5zXzWK1jCMeCjm3yFFFFWKBTO6AbYm+mk7ktyp9XkQj+4aWNOH9Hq4jDXcZ4SERMPNAZAcehYfiFZ5vVmmP2GPs1xudRfu+kRoPMrawb35tj4V19U0+KeJ4ZV3kcYI5eYII4hgQCCOIIBFRbTdYWxaeO8SSMNPNKtxuM0MiyOWXLoD1bKuFIfHs8Ca6se2+lMMi/tfjOi/xIrhOo+dAv5Y5DZ3L70yKWikPD6REMDf8OsXIDgd+G5NgSSoHtbtJpMkJK39uJosywOkqMySKDu4wTkH2Sv2gSO+upaba2PVRtNcRws6KSJCYwGZQSO3jkSaAlFFalhqMEy78M0ci+9G6uPmpIrazQGa8pY1YFWAIPAg8QR4EV60UB8hRUfgl6rUJUfgLiNHiPvNDvLKnqFaNgO8Fj3GpFXP1XS4p03JAeBDKykqyMOTKw4qwzz8z4mgN8Go7t04NpJbg9u5BtoxzJaYFScd4VSznwCk1hbDVEG6l3C69zTW5MnxMcqK34VqPbUatb6WBc3Dvc3jqyQhsKAOBYIq9mKPON48WPAEtwoDs9IO030CzeZDGZOCxK7Y3mJA4AcXwOOB4cxzqtOp6lNcytPPIZJH5sfyAA4Ko7gOArb1zW7u+nDzMZJGO6iKOC5PCONe4ZPqe813Ne6NL61tFunAPEmaNeLQKfZYkcGHvY4Lw5jJrogljf5GUrktiM6LJbrcRNcIZIQw61FOCy9/Lw544ZAIyM5q0M+n2l3YmCPc6iaLdQxgbqqR2GUDgN04I8xVTj/Dw/j6U4f0f9al6ya0JJi3OuQe42+qsB4Bt4HHiD41GVXuTB9CzTr7K6yMLPby/s76HBHmrfwNWm2c1qK7t4riI9mRQcd6nkyHzU5B9KR+12yJlsU1WFSWdppZwOJMck0jpJ+ypAP6uPCtDox25bT5DHLk20hy45mNuXWr4jAww7xxHEYMSWuNoL8XRELobk7/qTN+7Kf8ASrD9NC50iY+DQn/nRj/Oq868yma4ZGDKZZSrDiCDIxUg+BHGrHdIkDT6RMEVnZo4mCqCxOHjfgBxPKplzELhlZ6KyRxI7xwI7wfA+FFdaZzmKKKKFQooooArf0XV57WVJ4G3ZE5HmCDzUjvU94rQoo1ZKdD20Lpps3UC6jkhfvKDrIz6Y7Q9MH1NSFNv9Dl4m4h//IhU/vrVaKKweCJqsrLMvt/ocYyLmH9hST8lWtX/AN7GjE7vXvjxMMm7/c/yquNFP8dfR5n8LL28GhX7b0RgeX34W6qZfihWQVufR7+24o7XcQ5xyYE6j9STgsvhuvgn3vGro5g944g94PcQe40wdjOlS7tisdyWuIORLcZUHiGPtgeDcfAis54GuC8cqfI+tK1SKdN+Ns4O6wIKsjDmjqeKMM8jWttDrK26BiAWOcAtugBRlmZvsqOGTjvHqObJClwq39hInWlRhs9idB/RTY48OIDY3kPlvKdfVYTqMCvbv1M0TMrJKud1uAlt5VByAeHaU59kqcHjgam7s7tStw24VUE7xQo++rbuN5eQ3XGc7p7uNSaofs3oF4J2ubySNn3cJHECVUkYaRnftMxUBcDAAHInjUwoAqD9I+wa6kIiJeqki3grbu+CrYypGR3gEHPjU4ooCqm1ew19YkmeLei5CVO1HjPAHvQ+TfAmunsl0lXtqBFIfpEGMGOU5IU8wrnJxj7JyPSnxtPrSwKFKhiwYneyVCDG8SBxbngL3/xV11sJaX5Y2wFrMVLqqqwhkAO631TDfgYMcYHyrRTT2kUcWuDh2+xtjqUpbTrpIi3FradSJI+87m6frE492ceNNXY/Y6DS7eZg5kkZN6WUjGQikhQO5RxPMk540gdodnLyxkC3ETRnPYkXijEcijjv7+4jwrv2fSdqC2s1rMeuWSKSNJGOJU3kKg7w/nMZ7+PnVpQbWztEKSXI9NhIR/syzXHA20OR470Sk5+dKTpI6MJIGa4skLwEkvEoJeLxKjm0flzHmKbWx20VjcwItrKrCNFUp7LoFAUbyHiOXp51IjWabiy7SaKYFAQd08/Cnhsv0yWojjiuopIiiqvWJ9Yh3RjJAwwzjPI0tOkq3C6neADH1uRjhzRW/wA678PRPeS20NzbSxyiWNJNx8xsN5QcA8VbifKtpaWk3sZq1wN5TomqD/drg4/V6xc/J1qPat0Lae/GCWaA+GesX9/tfvUl9X2ZvrY5ntZY8faKby/B1yPzrb0nbjVIP5q9lx7rsJV9AJN7HwxUKMl6slyXaJZqfQrqCZ6mWGYeZMbH4EEfvVGNQ2C1aHJezlIHegEg/cJNSrS+m2+ThPBDKPFS0R/6gfkKlOndNtixAnhmi8WG7Io8zune+S1OvIuUV0wfAimUgkEEEHBB4EEcwR3Hyr5p+dKuy9vd2bX0AUyxp1odf6WIDLA49rs5YHxGORNIKt8c1NGU4aWFFFFXKBRRRQBRRRQBWaxRQEz6NdtnsJt1yTbSEdYvPcPLrV8x3jvHmBTx1K3dXW/tB1hKjrYlIxcRc1ZTy61QcqeRGVOMgirlMXov6Q/oZFvckm3J7LczCT/GM947udc+XHe6N8c+mPjS9RiuI1lhYMjciPkQQeKsDkFTgggg1v1ErjSZA5u9OkjDSYeSNjmC5yOD5X+bkxykUHP2ge730/a6BnENwrWtwf6GbC7x/s3z1co+6x8wK5Tck1FYBrNARzarQZZwjwTdVLGcqSCyMDjKuAQw5AhlIIPGvHZjZ6eF3nuZ1lmYbqhFKpGucsAXZncswySzdwAwBUprUv8AUIYUMk0iRoObOwVfmaA+r20jlRo5EV0YYZWAYEeBB4GkjtD0ZRz3Ey6ZhVhGJBIxMfXEg9TG2CykJktnIBKjhxwwm1e6v+xZBobcnt3brhnX/s6NxYn+sYBR3Bq+dpNo7LR7ZURMtx6qEN2nOcu7McnGclnOSSe8mrRbvYh12V7u7O7spgJFlt5l4qclW9VdeDD0JFMXZHpkmjxHfp1q8uujAEg82T2X9Rg+RqbaZtVpGrR9RMq75/oZwA2fFGzgnzU58hUR2n6FmBL2EoI/qpTgjyWQDj6MPjWjkntJFKa9SBdIeowz6jcTQOHikMbKwzx+pjDcDxBDAjB8KsJ0aPvaXZn+xQfIY/yqsWsaXLbSmG4jMcq4yrY7+IOVJBB8jUh2d6RNTtEWOKVWiQYWOVAyqOeARhv3qmUG0qIUqe5aIio9rGxOmXOTNaQsx5sF3H/EmG/OlxpfTl3XNofvQuD+7IBj8VS3TOlnR5sAztCx7pkZceRYZQfirFxkjRNM5WodCenOSYpJ4fIMrqPxgt+9Sc2w0A2V3Ja9Z1vV7hD7u5kOgbiMniM451aCw16zmGYbiGT7kit+QNVz6WJg2rXRHINGv4YIwfzzWuNvVRSaVWN/Y8k7Ppk/7rMPksgH5VXJOQqxuy3Y2eUnutJW+aSN/nVc1rTB2UzdBRRRXQYBRRRQBRRRQBRRRQBRRRQEo2P26vbA7sTB4c5ML+zx5lTzQ+nDxBpvaX0k6Rex9VchYiw7UdwoMZ9HPY+eD5VXqsVlPDGRpHI0Wht9loAu9Z3M8CnGOpm34hj3Ul30A9AK9/8AY+pDgupZHi9tGx+alR+VVes7yWI5hkkjPjG7If3SK7MW3GrKMC+n+L7397NY+B9M0WVFhZNAvn/nNTmA8IYoo8/Eq5rVk2f0q1PX3LhnHETXkvWEH9XrDhT5KBSBuNs9UcYa9uD6SFf7uK4s0jMxZ2LMebMSSfieNSv477YeVdDt2s6Y4UBjsU61+XWuCsa+intP+Q8zSa1PUZriRpp5GkkbmzH5AdwA8BwrUrNbwxqPBlKbZinL0HbUXM00trPM0irFvxBzvMMMA3aPEjDDmaTVSvow1YW+pQOxwrkwufKTgP3t2oyxTiyYOmdrp3g3dTBxwe3jPrh5FP8AAV2OjPYXTNQ08PKjCZJJI2kjcq3MMuR7J7LDmK6f6QGjl4Le6UfzTmN/JZcbp+DKB+1XB6BtfEVxLaO2FmAePw6xB2l9WTj+xXNzDbo2/wBjo6l0GHibe89Fmjz+8hH92orf9E2sR+zFHKP7KRc/KTdNWSFZxVVkkuyzgmVJvtk7+I/WWVwvn1TMPxKCPzrkSZAOc5Gc555HMHPfVyZZAqljyAJPwGap+d64m/Wnl4DvzLJ//VawyN3fwpKNUWF1Zeo2dK+FkifF41X+LVXKrEdNk6x6U0fLrJIY1H3WEmPlEflVeKv/AB1symbkxRRRW5iFFFFAFFFFAFFFFAFFFFAFFFFAFFFFCQooooAooooQFHxxRRQksjshqsOr6YY5sMxQw3C94cD2x4Z4OD3H0pC6/pFxY3RiclZImVo3XhvAHMcq/Fc+RBHdW1sTtTNp9wJkG8jdmWPON9M/kw5g+o5E08db0ew1u0SRH44JilUduJjzRl7x7yH1BHA1yNeN/pnQnqX7NLo76S4btVhuGWO5HDj2Um/WQ8gx935cKY+aqftXsje2LFbiM7mcLKo3om8OP2T5Ng+tb2hdIWq2wCx3BdBySUCVQPIntgejYqrx3vEnVXsP3pG1LqNOupM4PVMi/ek7C/mwqv3Rjp3XanapjIR+tPkIlLgn9oKK3NrOka9v7cW8yQqu+rkxhhvbucA7zNwyc/AVJf0ftL3ri4uSOEcaxL4b0jbzY8wIx+KpScYO+xalJUb/AOkLf8LW3HjJKfgAif3n+VJqpx0y6n12pyqPZhVIh6gb7fm5HwqD10YlUUY5HcjFFFFaGYUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUBmuvs1tLd2UvW28m7n20PFHHgy/wACOI8a49FGk1TJTofmz3S5p9wvV3a9Q7cG3hvxNn9bHAfeAA8a6E2wOgXg6yFI+P2raTdHyQ7v5VXShTg5HA+I4H8qweBdM1WX6Phug/T85E9zjw3o/wCO5XVvtS0zQ7UxRY3+LLFvb0srkDtP3gcBljgADA7hVfl1W5AwLiYDwEr4+Wa0yeJJ4k8yeJPxqFgfbJ8q6R7Xl08sjyyHLuzOx8WYkn8zXjWKK6DE/9k="
                      alt="숭실대학교"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-auto">숭실대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">16:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 2부 I조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div>
          <div class="font-semibold text-lg mb-1">9월 17일, 일요일</div>
          <table class="p-10 w-full table-auto bg-white rounded-2xl border-black">
            <thead class="text-left">
              <tr class="border-b-2">
                <th class="text-xs sm:text-base pl-2 py-2">홈</th>
                <th class="text-xs sm:text-base pl-2 py-2">어웨이</th>
                <th class="text-xs sm:text-base pl-2 py-2">시간</th>
                <th class="text-xs sm:text-base pl-2 py-2">구분</th>
                <th class="text-xs sm:text-base pl-2 py-2">중계</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/Oa6ahKe0AVYW4-N3I7rzUH9zjPYr9xu6LX9KbfVYCshIleQ4ilLwMSfhVHk3i8w_0LqsiI3MD7YUAIW5SiUKMZsPVXkoLyR1SaL36NAUu6KaU3CeN4dYO8c4kVHZ-D0ptrDXR36O8IOfF1aqGDtENA.webp"
                      alt="국민대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">국민대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/KEdpnIJ_4zflJ_SxgvzMqI3qbsJB4A1IT2peEMaiQc4bqrxFgQ_t7dZoxA8WMRmbBAfNy6I6d7rQozNxxSGGCKsIXmwdmbWn5Fd4IPnzGhTNXXxs2AQwUKKLvA4CPaFBPILOkkDqIYsdQy5onCpjsA.webp"
                      alt="건국대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-auto">건국대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">10:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 2부 I조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-[#F7F7F4]">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/nRkKcFEJyKHw1YFxW06TItspv55YMAO8IV18aV5HcJNlrXJOY2mWYZyumMN1DL4DGrTHr7oF-bVJfjLxZpkOVt2fMNWLvNc0MmOD8Z3T10iNjuntvEkJiGbgsxifKrpa4QwRoatHmgYY9JP9fGiwiQ.webp"
                      class="h-9 w-9 mr-2"
                      alt="단국대학교로고"
                    />
                    <div class="hidden sm:block w-28">단국대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/QZKy1ct0P8ps2CCL5cHggt4lPlY3lvNCykLaJUP8Lhe1IGio2eslPYuFwf-fbYkReepprbYDCr4a_g6G79CdllpbH2dqWWlS85Saq6-1idoKlb7W5NFFKQ9GSHKF9FD2vozgDltoy_tPwt_CyNKk5Q.webp"
                      class="h-9 w-9 mr-2"
                      alt="한신대학교로고"
                    />
                    <div class="hidden sm:block w-28">한신대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">13:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">중부 1조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/kEPxnvVHpyMojY09zi8R7ERHOZli4jtZjpmm-x37xiTI1eU69tPz8y7cjNepVaGCewlABj_OpoBv7hUa0Y924Mkws5uxrTrC4HptABs-LF-edfWLQcfRhTSwl0CwvScb9OluQMv9PMqZR9sKSst52A.webp"
                      alt="한양대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">한양대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/WUz-mBdL6OhaaIo3hjA1DFTWkODoCsV5KSFUEsRCV-pxnVgoxSBcm7n4QTw2ZE9ug3EFlh6xCJESbRGFrA7vulfrkTCDyIqKglA3zZZqsUc2_QTNFUFSaSUno0cZHD6EyiR7A_EVJrJHoCjid3Nk1Q.webp"
                      alt="성균관대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-auto">성균관대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">16:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부 1조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <!-- Week 4 -->
        <div>
          <div class="font-bold text-2xl text-left my-10">WEEK 4</div>
          <div class="font-semibold text-lg mb-1">9월 23일, 토요일</div>
          <table class="p-10 w-full table-auto bg-white rounded-2xl border-black">
            <thead class="text-left">
              <tr class="border-b-2">
                <th class="text-xs sm:text-base pl-2 py-2">홈</th>
                <th class="text-xs sm:text-base pl-2 py-2">어웨이</th>
                <th class="text-xs sm:text-base pl-2 py-2">시간</th>
                <th class="text-xs sm:text-base pl-2 py-2">구분</th>
                <th class="text-xs sm:text-base pl-2 py-2">중계</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/h9zMFD7oOPuoqY0PRMMmKB4yGcblV6sCM0d4ia4LTLK0EFMX75yFGoj8Uw_ddu9Ra8YK-rFGnSXtqczJm0KII2-sedIa9B8c4qfKj7iMvCR5IN49Kz6etPTjyIJEpad7ujp2ucjX81WPBUFtOJZuZg.webp"
                      alt="홍익대학교"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">홍익대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/psxddAheuATWEE8gCBoDSWUNbbyaKByY4aO2_v7STQl2wE5iISBX1thJC1ttpDylUf0kVQOrqQ37oKMG1GrG2GOjUQGyhMs1Q0dJlePXYnAeAji278v0zrTB8B15HOE7i2te65n7TJTGRRCvD5AvXw.webp"
                      alt="중앙대학교"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-auto">중앙대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">10:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 2부 I조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-[#F7F7F4]">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/kEPxnvVHpyMojY09zi8R7ERHOZli4jtZjpmm-x37xiTI1eU69tPz8y7cjNepVaGCewlABj_OpoBv7hUa0Y924Mkws5uxrTrC4HptABs-LF-edfWLQcfRhTSwl0CwvScb9OluQMv9PMqZR9sKSst52A.webp"
                      class="h-9 w-9 mr-2"
                      alt="한양대학교"
                    />
                    <div class="hidden sm:block w-28">한양대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/Qlx1_HMAPtJZ3--LDPLVznc7RaZFbBPisGCHLCAaWiZwnKACX3U8YvQfv2F6judqC1C2HEjEkfGdPdGz1-SIgW3NzL8QMjECFYp0sFXbxex13xiq5HdG6Hc3YsLE_ugUiRllECI-SulrWp1s5W4CTw.webp"
                      class="h-9 w-9 mr-2"
                      alt="연세대학교"
                    />
                    <div class="hidden sm:block w-28">연세대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">13:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부 1조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/WUz-mBdL6OhaaIo3hjA1DFTWkODoCsV5KSFUEsRCV-pxnVgoxSBcm7n4QTw2ZE9ug3EFlh6xCJESbRGFrA7vulfrkTCDyIqKglA3zZZqsUc2_QTNFUFSaSUno0cZHD6EyiR7A_EVJrJHoCjid3Nk1Q.webp"
                      alt="성균관대학교"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">성균관대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/8U6voVmzgvPupbYPgfR6imBNYJD3E77RLrw53BvgGojB7hU2yqOj07uBWNGb2kQQcSTdztaJZ_xMhZ2BE8X-zcbHcctjzkJvO-_xC9J4ymtziA7siA79WxDYWB0eQ5jfEgY85Y7uXEXvLrUg1_P81Q.webp"
                      alt="서울대학교"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-auto">서울대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">16:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부 1조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <!--  -->
        <div>
          <div class="font-semibold text-lg mb-1">9월 24일, 일요일</div>
          <table class="p-10 w-full table-auto bg-white rounded-2xl border-black">
            <thead class="text-left">
              <tr class="border-b-2">
                <th class="text-xs sm:text-base pl-2 py-2">홈</th>
                <th class="text-xs sm:text-base pl-2 py-2">어웨이</th>
                <th class="text-xs sm:text-base pl-2 py-2">시간</th>
                <th class="text-xs sm:text-base pl-2 py-2">구분</th>
                <th class="text-xs sm:text-base pl-2 py-2">중계</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/IrRy0xT7o0mF9EN9YTJILSjNhEETnqOCWOp0OW-xLklEOKl4KheN8juQ721pzHcWL5nrSW7pKJczfvFWOgf2wjgFVEHYHx5F3oMevFe9fES_91UjqujpMB6qrr505emdUWVXrLGHorRzNbrl_nvgDw.webp"
                      class="h-9 w-9 mr-2"
                      alt="동국대학교로고"
                    />
                    <div class="hidden sm:block w-28">동국대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/lkVJfYRPG-7f92t49xv4PcCjuUpDQc72XSshmachxpjlgndc7OjU0ccQK8GIL88LWVRbljEZ5zQm-qLlkOXKBIHzpK9iS-CxP50lovk19LMwnXp7icdsAuHOxZR00pfqmGg3-jWJbKVve8CkaiDF6w.webp"
                      alt="서울시립대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-28">서울시립대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">10:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부 2조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-[#F7F7F4]">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/HmXyjvAWTHJeJBE6UeGQ6_iHUD0gkntLceBr57ToLmwTbXvkvuOXlBUtfI5YLNxJNZT_-uDxN4CeYOZaNVW91vf_XR6vXoerv_Xq3hAct5ppOJuW8yl4IrKXGFUxL2eEbjtnwwMvESxIfIsDUqWTjA.webp"
                      alt="강원대학교로고"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">강원대학교</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img src="/images/yongin.jpeg" class="h-10 w-10 mr-2" alt="용인대학교" />
                    <div class="hidden sm:block w-28">용인대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">13:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">중부 2조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/2Gl5lQw3uK6LdRYy7PIUmnMk1fsvr25kxHCkoCUpsOlwoJGbdJC0btoBD6KinlLUq5mLrC88qTvb43kd12mIKzP7bmgyz4Wwzi5q3nbikaPWrqlYC8zDF0xARI1T5iwVDFtlZfJVMzK6hXyNjhuzXg.webp"
                      class="h-9 w-9 mr-2"
                      alt="한림대학교로고"
                    />
                    <div class="hidden sm:block w-28">한림대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/QZKy1ct0P8ps2CCL5cHggt4lPlY3lvNCykLaJUP8Lhe1IGio2eslPYuFwf-fbYkReepprbYDCr4a_g6G79CdllpbH2dqWWlS85Saq6-1idoKlb7W5NFFKQ9GSHKF9FD2vozgDltoy_tPwt_CyNKk5Q.webp"
                      class="h-9 w-9 mr-2"
                      alt="한신대학교로고"
                    />
                    <div class="hidden sm:block w-28">한신대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">16:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">중부 1조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <!-- Week 5 -->
        <div>
          <div class="font-bold text-2xl text-left my-10">WEEK 5</div>
          <div class="font-semibold text-lg mb-1">10월 01일, 토요일</div>
          <table class="p-10 w-full table-auto bg-white rounded-2xl border-black">
            <thead class="text-left">
              <tr class="border-b-2">
                <th class="text-xs sm:text-base pl-2 py-2">홈</th>
                <th class="text-xs sm:text-base pl-2 py-2">어웨이</th>
                <th class="text-xs sm:text-base pl-2 py-2">시간</th>
                <th class="text-xs sm:text-base pl-2 py-2">구분</th>
                <th class="text-xs sm:text-base pl-2 py-2">중계</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">7위</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <div class="hidden sm:block w-auto">8위</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">10:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-[#F7F7F4]">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <div class="hidden sm:block w-28">팀1</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <div class="hidden sm:block w-28">팀2</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">13:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <div class="flex flex-col">
                      <div class="hidden sm:block w-auto">팀1</div>
                    </div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <div class="hidden sm:block w-auto">팀2</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">16:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 1부</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <!--  -->
        <div>
          <div class="font-semibold text-lg mb-1">10월 01일, 토요일</div>
          <table class="p-10 w-full table-auto bg-white rounded-2xl border-black">
            <thead class="text-left">
              <tr class="border-b-2">
                <th class="text-xs sm:text-base pl-2 py-2">홈</th>
                <th class="text-xs sm:text-base pl-2 py-2">어웨이</th>
                <th class="text-xs sm:text-base pl-2 py-2">시간</th>
                <th class="text-xs sm:text-base pl-2 py-2">구분</th>
                <th class="text-xs sm:text-base pl-2 py-2">중계</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <div class="hidden sm:block w-28">팀1</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <div class="hidden sm:block w-28">팀2</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">10:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 2부</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-[#F7F7F4]">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <div class="hidden sm:block w-28">팀1</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <div class="hidden sm:block w-28">팀2</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">10:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">서울 2부</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img src="/images/yongin.jpeg" class="h-10 w-10 mr-2" alt="용인대학교" />
                    <div class="hidden sm:block w-28">용인대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <div class="flex items-center mr-2">
                    <img
                      src="https://i.namu.wiki/i/A5RjOK0FKDIuIXg7_nXJD1rGrsKAGzVlWYz7Yek7to9rHBSbGyEouYYldLFQN4VyEmB0MY7xDxCOIzHlo3taTH_KdoEr3ZiJxWZRB9jEyjSJLlCfayBYQLRzqUmMyqGOgmy77Zp-IgQJHb9VO_hrRA.webp"
                      alt="인하대학교"
                      class="h-9 w-9 mr-2"
                    />
                    <div class="hidden sm:block w-auto">인하대학교</div>
                  </div>
                </td>
                <td class="text-xs sm:text-base pl-2 py-3">13:00</td>
                <td class="text-xs sm:text-base pl-2 py-3">중부 2조</td>
                <td class="text-xs sm:text-base pl-2 py-3">
                  <a href="#" class="underline-offset-auto text-teal-500">중계 링크</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br />
  </div>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-400 bg-opacity-50 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <ExclamationTriangleIcon class="h-6 w-6 text-amber-500" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                      주의
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        지금 보시는 대회 일정 정보는 확정된 사안이 아니므로 주의해주시기 바랍니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 sm:ml-3 sm:w-auto"
                  @click="open = false"
                >
                  창 닫기
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import BannerItem from '@/components/bannerItem.vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

useHead({
  title: '대한미식축구협회-대회 일정',
  meta: [
    { name: 'description', content: '2023 서울경기강원 추계대회 일정' },
    {
      property: 'og:url',
      content: 'https://register.kafa.one/schedule'
    },
    { property: 'og:title', content: '대한미식축구협회-대회 일정' },
    { property: 'og:description', content: '2023 서울경기강원 추계대회 일정' },
    { property: 'og:image', content: 'https://register.kafa.one/images/ogtag.png' },
    { property: 'og:image:height', content: '400' },
    { property: 'og:image:width', content: '800' }
  ]
})

const open = ref(true)
</script>
