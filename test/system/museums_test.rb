require "application_system_test_case"

class MuseumsTest < ApplicationSystemTestCase
  setup do
    @museum = museums(:one)
  end

  test "visiting the index" do
    visit museums_url
    assert_selector "h1", text: "Museums"
  end

  test "creating a Museum" do
    visit museums_url
    click_on "New Museum"

    fill_in "Address", with: @museum.address
    fill_in "Name", with: @museum.name
    click_on "Create Museum"

    assert_text "Museum was successfully created"
    click_on "Back"
  end

  test "updating a Museum" do
    visit museums_url
    click_on "Edit", match: :first

    fill_in "Address", with: @museum.address
    fill_in "Name", with: @museum.name
    click_on "Update Museum"

    assert_text "Museum was successfully updated"
    click_on "Back"
  end

  test "destroying a Museum" do
    visit museums_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Museum was successfully destroyed"
  end
end
